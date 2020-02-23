import { printArray } from './utils/print.mjs';
import { data1, data2 } from './data/mocked.mjs';

console.log('Arrays playground');

//console.log(`data1: ${JSON.stringify(data1)}`);
//console.log(`data2: ${JSON.stringify(data2)}`);
printArray(data1, 'Array 1');
printArray(data2, 'Array 2');

let counter = 0;
let merged = [];
let diff1 = data1.filter(d1 => {
  return data2.some(d2 => {
    const matched = d2['a'] === d1['a'];
    if (matched) {
      merged.push({ ...d1, ...d2 });
    }
    counter++;
    return matched;
  });
});

printArray(diff1, 'Diff');
printArray(merged, 'Merged');

const resume = `Size data1 : ${data1.length}
Size data2 : ${data2.length}
Size diff1 : ${diff1.length}
Size merged : ${merged.length}
Nb Loops: ${counter}
`;
console.log(resume);
