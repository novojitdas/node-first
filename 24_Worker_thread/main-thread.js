const http = require('node:http');
const { Worker } = require('node:worker_threads'); // returns Worker class

const server = http.createServer( (req,res) => {
      if(req.url === "/"){
            res.writeHead(200, {"content-type": "text/plain"});
            res.end("Homepage");
      } else if (req.url === "/slow-page"){
            const worker = new Worker('./worker-thread.js'); // accepts path
            worker.on("message", (j) => {
            res.writeHead(200, {"content-type":"text/plain"});
            res.end(`Slow Page ${j}`);
            });
      }
});

const port = 3000
server.listen(port, () => {
      console.log(`server is running at ${port}`);
});