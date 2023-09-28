const crypto = require('node:crypto');

const start = Date.now();
crypto.pbkdf2Sync("password","salty",100000,512,"sha512");
crypto.pbkdf2Sync("password","salty",100000,512,"sha512");
crypto.pbkdf2Sync("password","salty",100000,512,"sha512");
console.log("Hash: ",Date.now()-start);
