
// Sample TS file to test out algoirthms, etc... 

import * as Sugar from 'sugar';
import * as fs from 'fs';
import {Person} from './person';




// Test built-in node imports
let z = fs.readdirSync('.');
console.log(z);
console.log('hello');


// Test 3rd party lib import
let arr = Sugar.Array([2,3,4,3,1,4]);
console.log(arr.unique().toString());


// Test importing local TS modules
let g : string = 'hi!';
let p = new Person('John', 55);
console.log(p.getGreeting());