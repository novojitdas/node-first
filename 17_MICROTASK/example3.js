process.nextTick( () => console.log('nextTick 1'));
process.nextTick( () => {
      console.log('nextTick 2');
      process.nextTick( () => {
            console.log("nextTick in a nextTick");
      });
});
process.nextTick( () => console.log('nextTick 3'));

Promise.resolve().then( () => console.log('promise 1'));
Promise.resolve().then( () => {
      console.log('promise 2');
      process.nextTick( () => console.log('nextTick in a promise'));
});
Promise.resolve().then( () => console.log('promise 3'));

/* 
nextTick 1
nextTick 2
nextTick 3
nextTick in a nextTick
promise 1
promise 2
promise 3
nextTick in a promise
*/