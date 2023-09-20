const superheroClass = require('./superhero');
const batmanOb = new superheroClass('batman');
console.log(batmanOb.getName()); // batman
batmanOb.setName("bruce wayne");
console.log(batmanOb.getName()); // bruce wayne 

const supermanOb = new superheroClass('superman');
console.log(supermanOb.getName()); // superman

