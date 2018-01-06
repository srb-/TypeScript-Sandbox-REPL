









import * as Sugar from 'sugar';
import * as fs from 'fs';

// import * as stream from 'stream';
//import fs = require('fs');




export var z = fs.readdirSync('.');
console.log(z);
console.log('hello');





let arr = Sugar.Array([2,3,4,3,1,4]);
console.log(arr.unique());



export let g : string = 'hi!';

// import {g, z} from './test.ts'
// NO, just: .load test.ts

//clear; ts-node --type-check  