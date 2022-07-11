const http = require('http')
const msg = require('./message')
const host = "localhost"
PORT = 5000
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/pain"})
    res.write('-Hello-')
    res.write(`${msg.message} I HERE TOO`)
    res.end()
})

server.listen(PORT,()=>{
    console.log('Start Sever runing at http://${host}:${PORT}')
})