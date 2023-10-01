setTimeout( () => console.log("SetTimeOut 1"),0);
setTimeout( () => {
                  console.log("SetTimeOut 2");
                  process.nextTick( () => console.log("nextTick in SetTimeout 2"));

            },0);
setTimeout( () => console.log("SetTimeOut 3"),0);

process.nextTick( () => console.log('nextTick 1'));
process.nextTick( () => {
      console.log('nextTick 2');
      process.nextTick( () => {
            console.log("nextTick in nextTick 2");
      });
});
process.nextTick( () => console.log('nextTick 3'));

Promise.resolve().then( () => console.log('promise 1'));
Promise.resolve().then( () => {
      console.log('promise 2');
      process.nextTick( () => console.log('nextTick in promise 2'));
});
Promise.resolve().then( () => console.log('promise 3'));

/* 
nextTick 1
nextTick 2
nextTick 3
nextTick in nextTick 2
promise 1
promise 2
promise 3
nextTick in promise 2
SetTimeOut 1
SetTimeOut 2
nextTick in SetTimeout 2
SetTimeOut 3
*/