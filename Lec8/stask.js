http = require('http')
url = require('url')
fs = require('fs')
buy = 100*70
sell = 100*60
http.createServer((req,res)=>{
    res.writeHead(200 , {'Content-Type':'text/html'})
    if(sell>buy){
        col = 'green'
        res.write(`<h1 style='color:${col}'>Your profit is ${sell - buy}</h1>`)
    }
    else{
        col = 'red'
        res.write(`<h1 style='color:${col}'>Your loss is ${buy - sell}</h1>`)
    }

    res.end()
}).listen(6008)