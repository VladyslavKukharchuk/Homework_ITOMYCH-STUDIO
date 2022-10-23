const ip = require('ip');
const http = require('http');

console.log(`Hello world, my ip address is ${ip.address()} and it is ${ip.isPrivate(ip.address()) ? "private" : "public"}.`);

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello world, my ip address is ${ip.address()} and it is ${ip.isPrivate(ip.address()) ? "private" : "public"}.`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});