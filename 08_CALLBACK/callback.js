function greet(name){
      console.log(`Welcome ${name}!`);
}

function higherOrderFunction(callback){
      const name = "Novojit";
      callback(name);
}

higherOrderFunction(greet);