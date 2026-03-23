// http = require('http')

// http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.writeHead(200,{'Content-Type':"text/html"})
//         res.write('<h1>Hello</h1>')
//         res.end()
//     }
//     else if(req.url==='/about'){
//         res.writeHead(200,{'Content-Type':"text/plain"})
//         res.write('<h1>Hello</h1>')
//         res.end()
//     }
//     else{
//         res.writeHead(404,{'Content-Type':"text/html"})
//         res.end('Page Not Found')
//     }
// }).listen(5000)

// http = require('http')
// fs = require('fs')

// http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.writeHead(200,{'Content-Type':"text/html"})
//         res.write('<h1>Hello</h1>')
//         res.end()
//     }
//     else if(req.url==='/img.jpg'){
//         d = fs.readFileSync('img.jpg')
//         res.writeHead(200,{'Content-Type':"image/jpg"})
//         res.end(d)
//     }
//     else{
//         res.writeHead(404,{'Content-Type':"text/html"})
//         res.end('Page Not Found')
//     }
// }).listen(5000)

http = require('http')
fs = require('fs')

http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':"text/html"})
        res.write('<h1>Hello</h1>')
        res.end()
    }
    else if(req.url==='/a.html'){
        d = fs.readFileSync('a.html')
        res.writeHead(200,{'Content-Type':"text/html"})
        res.end(d)
    }
    else{
        res.writeHead(404,{'Content-Type':"text/html"})
        res.end('Page Not Found')
    }
}).listen(5000)