import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {test,expect} from 'vitest';
test('teaching_images_are_unique_and_attached_to_real_lesson_steps', async () => {
  const media=JSON.parse(await readFile('src/content/teaching-media.json','utf8')) as {lesson:string;afterStep:number;path:string;sourceUrl:string;width:number;height:number}[];
  const hashes=new Set<string>();
  expect(media.length).toBeGreaterThanOrEqual(60);
  expect(new Set(media.map(x=>x.lesson)).size).toBeGreaterThanOrEqual(50);
  for(const x of media){
    expect(x.sourceUrl).toMatch(/^https:\/\//);
    expect(x.width).toBeGreaterThan(100);expect(x.height).toBeGreaterThan(60);
    const body=(await readFile('src/content/lessons/'+x.lesson+'.md','utf8')).split('---').slice(2).join('---');
    expect(x.afterStep,x.lesson).toBeLessThan(body.match(/^## /gm)?.length??0);
    const hash=createHash('sha256').update(await readFile('public'+x.path)).digest('hex');
    expect(hashes.has(hash),x.path).toBe(false);hashes.add(hash);
  }
  for(const technology of await readdir('src/content/lessons'))expect(media.filter(x=>x.lesson.startsWith(technology+'/')).length).toBeGreaterThanOrEqual(5);
});
