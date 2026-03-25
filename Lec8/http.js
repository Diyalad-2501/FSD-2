http = require('http')

http.createServer((req,res)=>{
    setTimeout(()=>{
        res.write('Welcome student')
        res.end()
    },5000)
}).listen(5006)