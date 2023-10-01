setImmediate( () => console.log('setImmediate 1'));
setImmediate( () => {
      console.log('setImmediate 2');
      process.nextTick( () => console.log('nextTick'));
      Promise.resolve().then( () => console.log('resolve'));
});
setImmediate( () => console.log('setImmediate 3'));
/*
setImmediate 1
setImmediate 2
nextTick
resolve
setImmediate 3
*/