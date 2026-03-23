http = require('http')

// let server = http.createServer((req,res)=>{
//     res.writeHead(200 , {'Content-Type':'text/html'})
//     res.write('Hii')
//     res.write("<h1> Hello server </h1>")
//     res.end('how are u')
// })

// server.listen(6008 ,()=>{
//     console.log('Server connect')
// })

// http = require('http')
// var a = [{'name':'Rohit',  runs:52} ,{'name':'Kohli',  runs:96},{'name':'Gill',  runs:20},{'name':'Rahul',  runs:33},{'name':'Tilak',  runs:30}]
// let server = http.createServer((req,res)=>{
//     res.writeHead(200 , {'Content-Type':'application/json'})
//     res.end(JSON.stringify(a))
// })

// server.listen(5006 ,()=>{
//     console.log('Server connect')
// })

// Fetch 
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write(req.url+"<br>")
//     res.end('URL fetched')
// }).listen(3006)

// Image support on url

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>Hello</h1> <img src="img.jpg">')
    res.end()
}).listen(3006)


