

# To run REPL and source a file


// import {g, z} from './test.ts'
// NO, just: .load test.ts

//clear; ts-node --type-check  

/// <reference path="./node_modules/sugar/sugar-extended.d.ts" />
import * as Sugar from 'sugar';
Sugar.extend();



let arr = [4, 5,6,7,99,5,5];
console.log(arr.sum());


// above triple slash is needed for sugar in extended mode, 
reference must be at top of file!!!