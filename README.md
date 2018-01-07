
## VSCode TypeScript Sandbox, REPL & Mocha Testrunner

Environment that supports quick language learning and experimenting in the following ways:

1. Compile, run or debug (with breakpoints) any arbitrary TS file (CTRL-F5)
2. Write tests that are run automatically against any TS file (just named xxxx.test.ts)
3. Runs a TS REPL (ts-node) in the Terminal window. Use .load filename.ts to execute TS files, .clear to reset scope


### Todos:

+ [ ] clean this readme up properly
+ [ ] make a src folder to keep it clean (but keep test with files) May cause errors and make repl annoying to use
+ [ ] get linting going for semicolons, etc!
+ [ ] fix output window showing after every save!
+ [x] get DevDocs going offline for Chai, typescript, everything!!
+ [x] get REPL going from a VS task command
+ [x] maybe just have it load at the start?


### Random notes:


//clear; ts-node --type-check  

/// <reference path="./node_modules/sugar/sugar-extended.d.ts" />
import * as Sugar from 'sugar';
Sugar.extend();


only runs my test after I hit save on some file!
    seems to ignore everything else (mouse commands)
        live with it, can't find easy way to fix



let arr = [4, 5,6,7,99,5,5];
console.log(arr.sum());


// above triple slash is needed for sugar in extended mode, 
reference must be at top of file!!!

cannot do .clear; semicolon...
