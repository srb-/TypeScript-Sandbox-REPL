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

