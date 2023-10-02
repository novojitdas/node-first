const http = require('node:http');

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