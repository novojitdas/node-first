const path = require("node:path");

console.log(__filename);
console.log(__dirname);
// path.basename() returns last portion of path
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

/* 
OUTPUT:
c:\Users\novojit\OneDrive\Documents\GitHub\node-first\07_BM_Path\01_pathbasics.js
c:\Users\novojit\OneDrive\Documents\GitHub\node-first\07_BM_Path
01_pathbasics.js
07_BM_Path
*/

// return . extension of a file, 
// will return a empty string for __dirname (because its a folder, not file)
console.log(path.extname(__filename)); // .js
console.log(path.extname(__dirname));  //         <- returned an empty string, we can't see it.

// return an object from a path string - opposite of format
console.log(path.parse(__filename));
/* OUTPUT:
{
  root: 'c:\\',
  dir: 'c:\\Users\\novojit\\OneDrive\\Documents\\GitHub\\node-first\\07_BM_Path',
  base: '01_pathbasics.js',
  ext: '.js',
  name: '01_pathbasics'
}
*/ 

// return a path string from an object - opposite of parse()
console.log(path.format(path.parse(__filename)));
//OUTPUT: c:\Users\novojit\OneDrive\Documents\GitHub\node-first\07_BM_Path\01_pathbasics.js

// checks for valid path
console.log(path.isAbsolute(__filename)); // true
console.log(path.isAbsolute('./data.json')); // false


