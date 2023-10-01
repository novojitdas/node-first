setTimeout( () => console.log('setTimeout'),0);
setImmediate( () => console.log('setImmediate'));

/* sometimes:
setImmediate
setTimeout

sometimes: 
setTimeout
setImmediate
*/
