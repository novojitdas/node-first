const fs = require('node:fs');

fs.readFile(__filename, () => {
      console.log("this is readFile");
});
process.nextTick( () => console.log('nextTick'));
Promise.resolve().then( () => console.log("promise"));
setTimeout( () => console.log("setTimeout"),0);
/*
nextTick
promise
setTimeout      
this is readFile
*/