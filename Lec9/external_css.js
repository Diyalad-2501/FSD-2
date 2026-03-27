fs = require('fs')
http = require('http')
url = require('url')

http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200 , {'Content-Type':'text/html'})
        d = fs.readFileSync('task.html')
        res.end(d)
    }
    else if(req.url=='/style.css'){
        res.writeHead(200 , {'Content-Type':'text                                                                                                                         /css'})
        f  = fs.readFileSync('style.css')
        res.end(f)
    }
}).listen(6008)