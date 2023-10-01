const upperCase = require('upper-case').upperCase;

function greet(name) {
      console.log(upperCase(`Hello ${name}, welcome to my repo`));
}

greet("novojit");
module.exports = greet;