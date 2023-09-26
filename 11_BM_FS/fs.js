// fs module returns fs object 
const fs = require("fs");

// fs method: 
let fileContents = fs.readFileSync("./file.txt"); 
console.log(fileContents); // return buffer of binary in hex format
// Output: <Buffer 48 65 6c 6c 6f 20 46 72 69 65 6e 64 73>
fileContents = fs.readFileSync("./file.txt","utf8");
console.log(fileContents); // Hello Friends 

// fs method in async
fs.readFile("./file.txt", "utf8", (error,data) =>{
      if(error){
            console.log(error);
      } else {
            console.log(data); // Hello Friends
      }
});

// creating a file 
// fs.writeFileSync(PATH,TEXT);
fs.writeFileSync("./greet.txt","Hello from Sync"); // Hello from novojit
// ASYNC
// fs.writeFile(PATH,TEXT, CALLBACK);
// for appending existing file: { flag: "a"}
fs.writeFile("./greet.txt", "& Hello I'M ASYNC",{ flag: "a"} ,(error) => {
      if (error) {
            console.log(error);
      } else {
            console.log("file is written");
      }
}); 

