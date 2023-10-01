console.log("Console Log 1");
process.nextTick(() => console.log("nextTick"));
console.log("Console Log 2");

/* 
Console Log 1
Console Log 2
nextTick
*/