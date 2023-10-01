const fs = require('node:fs');

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on('close', () => {
      console.log('close');
});

setImmediate( () => console.log('setImmediate'));
setTimeout( () => console.log('setTimeout'),0);
Promise.resolve().then( () => console.log('promise'));
process.nextTick( () => console.log('nextTick'));
/*
nextTick
promise
setTimeout
setImmediate
close
*/