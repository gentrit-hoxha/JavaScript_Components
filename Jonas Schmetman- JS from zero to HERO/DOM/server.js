const http = require('http');

const hostname = '127.0.0.1';
const port     = 2500;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type' , 'text/plain');
    res.end('Hello Gentrit, the server is working');
});

server.listen(port, hostname , ()=>{
    console.log(`The server is working on http://${hostname}:${port}/`)
});