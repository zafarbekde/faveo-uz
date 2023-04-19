const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('/api/v1/users');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:2000/');
});
