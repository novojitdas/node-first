const path = require('node:path');

console.log(path.join('folder1','folder2','index.js'));
console.log(path.join('/folder1','folder2','index.js'));
console.log(path.join('/folder1','//folder2','index.js'));
console.log(path.join('/folder1','//folder2','../index.js'));
console.log(path.join(__dirname,"data.json")); 
/* OUTPUT:
folder1\folder2\index.js
\folder1\folder2\index.js
\folder1\folder2\index.js
\folder1\index.js
c:\Users\novojit\OneDrive\Documents\GitHub\node-first\07_BM_Path\data.json
*/