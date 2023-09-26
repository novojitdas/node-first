const path = require('node:path');

console.log(path.resolve('folder1','folder2','index.js'));
console.log(path.resolve('/folder1','folder2','index.js'));
console.log(path.resolve('/folder1','//folder2','index.js'));
console.log(path.resolve('/folder1','//folder2','../index.js'));
console.log(path.resolve(__dirname,"data.json")); 
/* OUTPUT:
C:\Users\novojit\OneDrive\Documents\GitHub\node-first\folder1\folder2\index.js
C:\folder1\folder2\index.js
C:\folder2\index.js
C:\index.js
*/