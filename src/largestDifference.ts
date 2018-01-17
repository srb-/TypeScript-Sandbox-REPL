// Find the largest possible difference in an array with the 
// smaller integer occurring earlier


// could take a multi-pass approach
//

/*

go from index 1 to end

for each take difference of prior numbers


---- optization

  keep track of lowest seen so far, highest seen so far
  break your loop if alr



*/

// analyze this in terms of runtime


import * as Sugar from 'sugar';




export function findLargest(a: Array<number>) : number {

    let arr = new Sugar.Array(a); // to get a min function
    let maxDiff = 0;

    arr.forEach((val, i) => {

      let diff = val - arr.to(i).min().raw;
    
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    });

    return maxDiff;
}

// Space and runtime analysis

const ns = [1, 10, 100, 1000, 10000, 100000, 1000000];
let mems = [];
let times =[];


for (let n in ns) {

  let memStart = process.memoryUsage().heapUsed;
  let timeStart = Sugar.Date.create();

  // do the function we're measuring

  console.time('t')

  findLargest(Array(n).fill(1));

  console.timeEnd('t')

  let memEnd = process.memoryUsage().heapUsed;
  let timeEnd = Sugar.Date.create();

  mems.push(memEnd - memStart);
  times.push(timeEnd.getMilliseconds()-timeStart.getMilliseconds())
  // console.log(timeEnd.getMilliseconds())

}

console.log(ns)
console.log(mems.reverse())
console.log(times.reverse())

// const used2 = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script2 uses approximately ${Math.round(used2 * 100) / 100} MB`);