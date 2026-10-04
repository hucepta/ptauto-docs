import {readFile,readdir} from 'node:fs/promises';
import {test,expect} from 'vitest';
test('teaching_images_are_attached_to_real_lesson_steps', async () => {
  const media=JSON.parse(await readFile('src/content/teaching-media.json','utf8')) as {lesson:string;afterStep:number;path:string;sourceUrl:string;width:number;height:number;caption:string;instruction:string}[];
  expect(new Set(media.map(x=>x.lesson+'|'+x.path)).size).toBe(media.length);
  expect(media.length).toBeGreaterThanOrEqual(60);
  expect(new Set(media.map(x=>x.lesson)).size).toBeGreaterThanOrEqual(50);
  for(const x of media){
    expect(x.sourceUrl).toMatch(/^https:\/\//);
    expect(x.width).toBeGreaterThan(100);expect(x.height).toBeGreaterThanOrEqual(24);
    const body=(await readFile('src/content/lessons/'+x.lesson+'.md','utf8')).split('---').slice(2).join('---');
    expect(x.afterStep,x.lesson).toBeLessThan(body.match(/^## /gm)?.length??0);
    expect(x.caption.trim().length).toBeGreaterThan(8);
    expect(x.instruction.trim().length).toBeGreaterThan(20);
    await readFile('public'+x.path);
  }
  for(const technology of await readdir('src/content/lessons'))expect(media.filter(x=>x.lesson.startsWith(technology+'/')).length).toBeGreaterThanOrEqual(5);
});
