const fs = require('node:fs');

fs.readFile(__filename, () => {
      console.log("this is readFile");
});
process.nextTick( () => console.log('nextTick'));
Promise.resolve().then( () => console.log("promise"));
setTimeout( () => console.log("setTimeout"),0);
setImmediate( () => console.log("setImmediate"));
/*
nextTick
promise
setTimeout
setImmediate
this is readFile
*/