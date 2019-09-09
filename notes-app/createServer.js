var http=require('http')
var dt = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200);
  res.write(req.url );
  res.end();
}).listen(8082);
