
## Hello

todo:


only runs my test after I hit save on some file!
    seems to ignore everything else (mouse commands)
        live with it, can't find easy way to fix


fix output window showing after every save!



get DevDocs going offline for Chai, typescript, everything!!


get linting going for semicolons, etc!




DONE - get REPL going from a VS task command
    maybe just have it load at the start?

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

cannot do .clear; semicolon...
