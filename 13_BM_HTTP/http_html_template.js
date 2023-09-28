const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req,res) => {
      const name = "NOVOJIT";
      res.writeHead(200, { "content-type": "text/html"});
      let html = fs.readFileSync("./name.html","utf8");
      html = html.replace("{{name}}",name);
      res.end(html);
});

server.listen(3000,() => {
      console.log("Server running at port 3000");
});