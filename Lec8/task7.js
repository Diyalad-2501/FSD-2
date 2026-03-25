// Create HTTP webpage on which Home page display “Welcome to Log in page” in blue color 
// and font size must be 32px, Login page shows one HTML file from static URL having 
// Form with detail for Username, Password, submit and reset button
// , Gallery page reflect one Image “hello.jpg” and any other page shows “Page Not found”.
//  Write all necessary files to perform task. (Image already exist in same folder)

http = require('http')
url = require('url')
fs = require('fs')
abbr = 'http://localhost:5000/login'
q = url.parse(abbr)
console.log(q.pathname)

http.createServer((req,res)=>{

    if(req.url == '/'){
        res.writeHead(200 , {'Conten-Type':'text/html'})
        d=fs.readFileSync('home.html' ,'utf-8')
        res.end(d)
    }
    else if(req.url == '/login'){
         res.writeHead(200 , {'Conten-Type':'text/html'})
         d = fs.readFileSync(`.${q.pathname}.html` , 'utf-8')
         res.end(d)
    }
    else if(req.url == '/gallery'){
        res.writeHead(200 , {'Content-Type':'image/jpg'})
        d = fs.readFileSync('hello.jpg')
        res.end(d)
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.write('Page Not Found')
        res.end()
    }

}).listen(5000)