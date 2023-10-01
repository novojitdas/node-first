const fs = require('node:fs');

setTimeout(() => console.log('setTimeout'),0);

fs.readFile(__filename, () => {
      console.log("this is readFile");
});

/*
setTimeout
this is readFile
*/