console.log("hi there")
console.log('Nodemon is working perfactly')
const data =require('./data')
const http = require('http')
http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'applicaton\json' })
    resp.write(JSON.stringify(data))
    resp.end();
    console.log('test')
    console.log("Api checked")
}).listen(5000);