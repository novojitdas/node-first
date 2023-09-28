const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer( (request,response) => {
      response.writeHead(200, { "content-type": "text/html" });
      fs.createReadStream(__dirname + "/index.html").pipe(response); // for static page,where content doesnt change
     // const html = fs.readFileSync("./index.html","utf8");
     // response.end(html);
});

server.listen(3000, () => {
      console.log("server is running at port 3000");
});