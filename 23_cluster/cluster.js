const cluster = require('node:cluster');
const http = require('node:http');
const OS = require('node:os');

console.log(OS.cpus().length);


if(cluster.isMaster){ // isMaster is true by default
      console.log(`master process running at ${process.pid}`);
      cluster.fork(); // creating worker, isMaster status will be false
      cluster.fork(); // cluster.fork() is an async method
} else {
      console.log(`worker ${process.pid} started`);
      const server = http.createServer( (req,res) => {
            if(req.url === "/"){
                  res.writeHead(200, {"content-type": "text/plain"});
                  res.end("Homepage");
            } else if (req.url === "/slow-page"){
                  for (let i=0; i<6000000000 ;i++) {}
                  res.writeHead(200, {"content-type":"text/plain"});
                  res.end("Slow Page");
            }
      });
      
      const port = 3000
      server.listen(port, () => {
            console.log(`server is running at ${port}`);
      });
}

/*
4
master process running at 25676
4
4
worker 1124 started
worker 6440 started
server is running at 3000
server is running at 3000
*/
