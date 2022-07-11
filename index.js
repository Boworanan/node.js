const http = require('http')
const msg = require('./message.js')
const {loadUser} = require('./user-module.js')
const host = "localhost"
const PORT = process.env.PORT || 5000

const server = http.createServer((req,res)=>{
    const jsonContent = JSON.stringify(loadUser())

    res.writeHead(200 ,{"Content-Type":"text/pain"})
    res.write('-Hello-')
    res.write(`${msg.message} I HERE TOO`)
    res.end()
})

server.listen(PORT,()=>{
    console.log('Start Sever runing at http://${host}:${PORT}')
})