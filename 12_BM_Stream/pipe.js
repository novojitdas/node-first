const fs = require('node:fs');
// zlib module provides compression functionallty using zlib algorithm
// zlib allows us to create zip file
// zlib has built in transform stream
const zlib = require('node:zlib');
const gzip = zlib.createGzip();
// createReadStream(PATH,OPTION_OBJECT);
const readableStream = fs.createReadStream("./sendFile.txt",{
      encoding: 'utf8',
      highWaterMark: 2,
});

// PIPE CHAINING 
// ReadableStream -> transform Stream -> WritableStream
readableStream.pipe(gzip).pipe(fs.WriteStream('./receiveFile.txt.gz'));

const writableStream = fs.createWriteStream("./receiveFile.txt");
readableStream.pipe(writableStream); // readFile to WriteFile