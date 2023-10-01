const fs = require('node:fs');

fs.readFile(__filename, () => {
      console.log("this is readFile");
});

process.nextTick( () => console.log('nextTick'));
Promise.resolve().then( () => console.log("promise"));

/*
nextTick
promise
this is readFile
*/