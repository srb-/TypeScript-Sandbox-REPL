




import * as Sugar from 'sugar';
import * as fs from 'fs';
import {Person} from './person';

// import * as stream from 'stream';
//import fs = require('fs');



// import {g, z} from './test.ts'
// NO, just: .load test.ts

//clear; ts-node --type-check  

// .clear should reset... must do .clear between .load 
// note that these commands come from Node REPL, no ts-node

// TIP: return value of last run expression is underscore _




let z = fs.readdirSync('.');
console.log(z);
console.log('hello');





let arr = Sugar.Array([2,3,4,3,1,4]);
console.log(arr.unique());



let g : string = 'hi!';

let p = new Person('John', 55);

console.log(p.getGreeting());