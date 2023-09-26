// return fs object
const fs = require('node:fs');

// createReadStream(PATH,OPTION_OBJECT);
const readableStream = fs.createReadStream('./sendFile.txt', {
            encoding: 'utf8',
            highWaterMark: 2, // default buffer 64kB to 2B
});
const writableStream = fs.createWriteStream('./receiveFile.txt');

// fs extends from EventEmitter Class
// create an event
// readableStream.on( "EVENT-NAME", CallbackFn);
readableStream.on( "data" , (chunk) => {
      console.log(chunk); // default buffer size is 64kb
      writableStream.write(chunk);
});

