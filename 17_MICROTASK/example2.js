Promise.resolve().then( () => {
      console.log('Promise.resolve');
});

process.nextTick( () => console.log('process nextTick'));

/* output: 
process nextTick
Promise.resolve
*/