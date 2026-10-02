import {readFile,readdir,stat,writeFile} from 'node:fs/promises';
import {resolve,relative,sep} from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
async function walk(root){
 const paths=[];
 for(const item of await readdir(root,{withFileTypes:true})){
  const path=resolve(root,item.name);
  if(item.isDirectory())paths.push(...await walk(path));else paths.push(path);
 }
 return paths;
}
const decode=text=>text.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#39;',"'");
export async function verifyArtifact(directory){
 const root=resolve(directory);const errors=[];
 const files=await walk(root);const fileSet=new Set(files);const htmlFiles=files.filter(p=>p.endsWith('.html'));
 const readJson=async path=>{try{return JSON.parse(await readFile(resolve(root,path),'utf8'));}catch{errors.push('Missing or invalid '+path);return null;}};
 const catalog=await readJson('catalog.json');const records=await readJson('search-records.json');const index=await readJson('pagefind/build.json');
 const base=catalog?.base||'/';
 if(!catalog?.buildId||catalog.buildId!==records?.buildId||catalog.buildId!==index?.buildId||index?.records!==records?.records?.length||index?.base!==base)errors.push('Search build khác phiên bản HTML/catalog.');
 for(const asset of ['pagefind/pagefind.js']){
   try{if(!(await stat(resolve(root,asset))).size)errors.push('Empty '+asset);}catch{errors.push('Missing '+asset);}
 }
 if(!files.some(p=>p.endsWith('.wasm')||/wasm\.[^/\\]+\.pagefind$/.test(p)))errors.push('Missing Pagefind WASM.');
 const html=new Map(await Promise.all(htmlFiles.map(async p=>[p,await readFile(p,'utf8')])));
 const ids=new Map();
 for(const [file,body] of html){
   if(!body.includes('lang="vi"')||(body.match(/<main\b/g)||[]).length!==1)errors.push(relative(root,file)+': lang/main invalid.');
   if(!body.includes('name="ptauto-build" content="'+catalog?.buildId+'"'))errors.push(relative(root,file)+': HTML build mismatch.');
   const list=[...body.matchAll(/\bid="([^"]+)"/g)].map(m=>decode(m[1]));
   if(new Set(list).size!==list.length)errors.push(relative(root,file)+': duplicate anchor.');
   ids.set(file,new Set(list));
 }
 const checkLink=(href,from)=>{
   if(/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(href)||href.startsWith('//'))return;
   try{
     const sourcePath=base+relative(root,from).split(sep).join('/').replace(/index.html$/,'');
     const url=new URL(decode(href),'https://artifact.test'+sourcePath);
     if(base!=='/'&&!url.pathname.startsWith(base)){errors.push(relative(root,from)+': wrong base '+href);return;}
     let path=decodeURIComponent(url.pathname).slice(base==='/'?1:base.length);
     if(!path||path.endsWith('/'))path+='index.html';
     let target=resolve(root,path);
     if(!fileSet.has(target)&&fileSet.has(resolve(target,'index.html')))target=resolve(target,'index.html');
     if(!fileSet.has(target)){errors.push(relative(root,from)+': missing link '+href);return;}
     if(url.hash&&ids.has(target)&&!ids.get(target).has(decodeURIComponent(url.hash.slice(1))))errors.push(relative(root,from)+': missing anchor '+href);
   }catch{errors.push(relative(root,from)+': invalid link '+href);}
 };
 for(const [file,body] of html)for(const match of body.matchAll(/\b(?:href|src)="([^"]+)"/g))checkLink(match[1],file);
 for(const page of catalog?.pages||[])checkLink(base.replace(/\/$/,'')+page.url,resolve(root,'index.html'));
 for(const record of records?.records||[])checkLink(base.replace(/\/$/,'')+record.url,resolve(root,'index.html'));
 const releasePath=resolve(root,'release.json');
 if(fileSet.has(releasePath)){
   const release=await readJson('release.json');
   if(release?.buildId!==catalog?.buildId)errors.push('Release build mismatch.');
   for(const [path,hash] of Object.entries(release?.files||{})){
     try{const actual=createHash('sha256').update(await readFile(resolve(root,path))).digest('hex');if(actual!==hash)errors.push('Artifact checksum mismatch: '+path);}catch{errors.push('Release file missing: '+path);}
   }
 }
 if(errors.length)throw new Error(errors.join('\n'));
 return {pages:htmlFiles.length,files:files.length,buildId:catalog.buildId,base};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const root=resolve(process.env.BUILD_DIR||'dist');
 const result=await verifyArtifact(root);
 const files={};
 for(const file of await walk(root))if(relative(root,file)!=='release.json')files[relative(root,file).split(sep).join('/')]=createHash('sha256').update(await readFile(file)).digest('hex');
 await writeFile(resolve(root,'release.json'),JSON.stringify({buildId:result.buildId,base:result.base,files},null,2)+'\n');
 console.log('Artifact verified: '+result.pages+' pages, '+result.files+' files; build '+result.buildId);
}
