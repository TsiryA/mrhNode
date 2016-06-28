import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': "text/plain"});
  res.end("Hello world\n");
}).listen(3000, '127.0.0.1');

console.log("server running at http://127.0.0.1:3000/");