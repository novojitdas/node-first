const superhero = require("./cache.js");
console.log(superhero.getName()); //batman
superhero.setName("superman");
console.log(superhero.getName()); //superman

const newSuperhero = require('./cache.js');
console.log(newSuperhero.getName()); // superman
/*
here we should found batman as an output but
we are getting superman because of module caching
on line 6 require in not calling again because
require already called and execute cache.js module on line 1
so its avoiding calling again, passing the reference to the newSuperhero
also we know that, object is passed by reference.

for solving caching problem. we should pass the class, not the new object. when exporting
*/