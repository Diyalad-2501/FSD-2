http = require('http')
fs = require('fs')

http.createServer((req,res)=>{
    setTimeout(()=>{
        res.writeHead(200 , {'Content-Type':'text/plain'})
        res.write('Welcome')
        res.end()
    },10000)
}).listen(5000)