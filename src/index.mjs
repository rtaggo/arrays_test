import { printArray } from './utils/print.mjs';
//import { data1, data2, generateData } from './data/mocked.mjs';
import { randomNumber, generateData } from './data/mocked.mjs';

console.log('Arrays playground');

let minData = 5;
let maxData = 20;
let nbData1 = randomNumber(minData, maxData);
let nbData2 = randomNumber(minData, maxData);
let data1 = generateData(nbData1, ['loulou']);
let data2 = generateData(nbData2, ['riri', 'fifi']);
data1.sort((a, b) => {
  return a.name.localeCompare(b.name);
});
data2.sort((a, b) => {
  return a.name.localeCompare(b.name);
});
//console.log(`data1: ${JSON.stringify(data1)}`);
//console.log(`data2: ${JSON.stringify(data2)}`);
printArray(data1, 'Array 1');
printArray(data2, 'Array 2');

let counter = 0;
let merged = [];
let diff1 = data2.filter(d1 => {
  return data1.some(d2 => {
    const matched = d2['name'] === d1['name'];
    if (matched) {
      merged.push({ ...d1, ...d2 });
    }
    counter++;
    return matched;
  });
});

merged.sort((a, b) => {
  return a.name.localeCompare(b.name);
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
