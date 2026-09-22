import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist');
async function walk(dir) { const entries = await readdir(dir, { withFileTypes:true }); return (await Promise.all(entries.map(e => e.isDirectory() ? walk(path.join(dir,e.name)) : path.join(dir,e.name)))).flat(); }
const files = (await walk(root)).filter(f=>f.endsWith('.html'));
for (const file of files) {
  const html = await readFile(file, 'utf8');
  assert.equal((html.match(/<h1[ >]/g)||[]).length, 1, `One H1: ${file}`);
  assert(!/\[n\]|registry@domain|academy@domain|\[PIN\]|<form|AlignAcademy/.test(html), `No missing details, intake form or deferred offering: ${file}`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    let target = path.join(root, match[1]);
    if ((await stat(target)).isDirectory()) target = path.join(target,'index.html');
    await stat(target);
  }
}
console.log(`Verified ${files.length} HTML documents: local links/assets, one H1, no placeholder details, no intake form, no AlignAcademy.`);
