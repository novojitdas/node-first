// return a fs object
const fs = require('node:fs/promises');


// Using Promise then catch
fs.readFile("./file.txt","utf8")
      .then(data => console.log(data))
      .catch(error => console.log(error));
    

// Using Async Function
async function readFile(path) {
      if(path) {
            try {
                  const data = await fs.readFile(path, "utf8");
                  console.log(data);
            } catch (error) {
                  console.log(error);
            }          
      } else {
            console.log(`path is missing or wrong`);
      }
}

let path = "./file.txt";
readFile(path);