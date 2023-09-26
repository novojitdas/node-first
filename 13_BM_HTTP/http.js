// http module returns a object
const http = require("node:http");

// when the request reaches on server, this callback function is executed
// request Listener
const server = http.createServer( (request,response) => {
      response.writeHead(200, {"content-type":"text/plain"}); // response header with a status code of 200
      //End the response
      response.end("response ended"); 
});

//port number on which the server should listen for incoming requests.
server.listen(3000, () => {
      console.log("server is running on port 3000");
});