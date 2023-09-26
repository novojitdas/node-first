// first way <--
// import * as math from "./pattern4.mjs"

// now you can access as math.add() or math.subtrac() like this, or another way
// const {add, subtract} = math
// import {add, subtract} = math

// second way <--
import {add, subtract} from "./pattern4.mjs"

console.log(add(5,5));
console.log(subtract(5,2));
