
## VSCode TypeScript Sandbox, REPL & Mocha Testrunner

Environment that supports quick language learning and experimenting in the following ways:

1. Compile, run or debug (with breakpoints) any arbitrary TS file (CTRL-F5) in /src
2. Write tests that are run automatically against any TS file (name files xxxx.tests.ts)
3. Runs a TS REPL (ts-node) in the Terminal window. Use .load xxxx.ts to execute TS files, .clear to reset scope


### Todos:

+ [ ] get linting going for semicolons, etc
+ [ ] fix output window showing after every save
+ [x] clean this readme up properly
+ [x] make a src folder to keep it clean (but keep test with files) May cause errors and make repl annoying to use
+ [x] get DevDocs going offline for Chai, typescript, everything!!
+ [x] get REPL going from a VS task command
+ [x] maybe just have it load at the start?

### Installation

Requires VS Code with the Mocha Sidebar extension. 

Keep your code and tests in /src

### Random notes:

//clear; ts-node --type-check  

Tried to get SugarJS going with monkeypatching, by putting this at start of file. Did not work with TS:

/// <reference path="./node_modules/sugar/sugar-extended.d.ts" />
import * as Sugar from 'sugar';
Sugar.extend();

let arr = [4, 5,6,7,99,5,5];
console.log(arr.sum());


// above triple slash is needed for sugar in extended mode, 
reference must be at top of file!!!

cannot do .clear; semicolon...

In ts-node: return value of last run expression is underscore _


if getting red squigly lines on import in VSCode try pressing F1 to reload window

in sugar use .raw to get unchained underlying object