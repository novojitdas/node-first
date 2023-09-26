// Buffer is global in nodejs, so don't need to import 
const buffer = new Buffer.from("Novojit"); // parameter accepts string

buffer.write('das'); //dasojit (buffer have limited memory, thats why replaced)
console.log(buffer); // returns characters set in hex format
console.log(buffer.toJSON()); // returns in unicode character code format
console.log(buffer.toString()); 


