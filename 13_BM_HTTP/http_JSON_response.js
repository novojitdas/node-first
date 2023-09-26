// http module returns an object
const http = require('node:http');
const dataJSON = require('./data.json');

const server = http.createServer( (request,response) => {
      
      response.writeHead(200, {"content-type": "application/json"});
      response.end(JSON.stringify(dataJSON));
});

// server's listen port 3000
server.listen(3000, () =>{
      console.log("server is running at port: 3000");
});