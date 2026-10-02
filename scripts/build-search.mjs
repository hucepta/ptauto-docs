import * as pagefind from 'pagefind';
import {readFile,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {indexContent} from './search-content.mjs';
const root=resolve(process.env.BUILD_DIR||'dist');
const source=JSON.parse(await readFile(resolve(root,'search-records.json'),'utf8'));
const created=await pagefind.createIndex({forceLanguage:'vi',includeCharacters:'.-_#*',writePlayground:false});
if(created.errors.length||!created.index)throw new Error(created.errors.join('\n'));
try{
 for(const record of source.records){
   const target=source.base.replace(/\/$/,'')+record.url;
   const result=await created.index.addCustomRecord({
     url:target,content:indexContent(record.content),language:'vi',
     meta:{id:record.id,title:record.title,description:record.description,technology:record.technology,kind:record.kind,target},
     filters:{technology:[record.technology],kind:[record.kind]}
   });
   if(result.errors.length)throw new Error(result.errors.join('\n'));
 }
 const written=await created.index.writeFiles({outputPath:resolve(root,'pagefind')});
 if(written.errors.length)throw new Error(written.errors.join('\n'));
 await writeFile(resolve(root,'pagefind/build.json'),JSON.stringify({buildId:source.buildId,records:source.records.length,base:source.base}));
 console.log('Pagefind: '+source.records.length+' canonical records; build '+source.buildId);
}finally{await pagefind.close();}

