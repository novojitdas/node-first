const http = require('node:http');
const fs = require('node:fs');
const json = require('./data.json')


const server = http.createServer((req,res)=>{
      // req.method also gives to acces GET POST READ DELETE
      if(req.url === "/"){ //home
            res.writeHead(200, {"content-type": "text/plain"});
            res.end("Home Page");
      } else if (req.url === "/about") { 
            res.writeHead(200, {"content-type": "text/plain"});
            res.end("About Page");
      } else if (req.url === "/api") {
            res.writeHead(200, {"content-type": "application/json"});
            res.end(JSON.stringify(json));
      } else {
            res.writeHead(404);
            res.end("Page not found: 404");
      }
});

server.listen(3000, ()=>{
      console.log("server is up and running at 3000 port");
});