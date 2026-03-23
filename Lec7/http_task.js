http = require('http')
fs = require('fs')

http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200 , {'Content-Type':'text/plain'})
        res.write('Welcome')
        res.end()
    }
    
    else if(req.url==='/home'){
        res.writeHead(200 , {'Content-Type':'text/html'})
        d = fs.readFileSync('a.html')
        res.end(d)
    }
    else if(req.url==='/about'){
        res.writeHead(200 , {'Content-Type':'text/html'})
        d = fs.readFileSync('task.html')
        res.end(d)
    }
    else{
        res.writeHead(404 , {'Content-Type':'text/plain'})
        res.end('Page not Found')
    }
}).listen(5000)