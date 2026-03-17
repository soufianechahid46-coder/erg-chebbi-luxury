import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
let count = 0;

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory() && item !== 'node_modules' && item !== '.next') {
      walk(full);
    } else if (stat.isFile()) {
      count += 1;
    }
  }
}

walk(root);
console.log(`Total files: ${count}`);
