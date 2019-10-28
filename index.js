const http = require('http');
const chalk  = require('chalk');
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('Hello World');
}).listen(port);

console.log(`App is running on Port: ${chalk.green(port)}`);