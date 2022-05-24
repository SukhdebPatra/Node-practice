console.log("hi there")
console.log('Nodemon is working perfactly')

const http = require('http')
http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'applicaton\json' })
    resp.write(JSON.stringify({ name: 'Suhdeb', email: 'sukhdeb@text.com' }))
    resp.end();
    console.log('test')
}).listen(5000);