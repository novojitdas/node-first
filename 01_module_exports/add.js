const add = (num1,num2,callback) => {
      sum = num1 + num2;
      if(callback){
            callback(sum);
      }
      return sum;
};

const getDisplay = (sum) => {
      console.log(`result is ${sum}`);
};
// export modules
module.exports = {
      add,
      getDisplay,
};