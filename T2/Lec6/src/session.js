expr = require('express')
app = expr()
ss = require('express-session')
app.use(expr.static('../public' , {index:'session.html'}))
app.use(ss({
    secret : 'My Session',
    resave : false ,
    saveUninitialized : false
}))

app.get('/savesession' ,(req,res)=>{
    req.session.uname = req.query.uname
    req.session.pwd = req.query.password
    res.redirect('/fetchdata')
})

app.get('/fetchdata' , (req,res)=>{
    if(req.session.uname == 'admin' && req.session.pwd=='admin@123'){
        res.set('Content-type' , 'text/html')
        res.write(`Welcome ${req.session.uname}`)
        res.write(`<br><a href='/destroy'>Logout</a>`)
    }
    else{
        res.set('Content-type' , 'text/html')
        res.write('Please enter valid username and password')
        res.write('<a href="/">Login </a>')
    }
    res.send()
})

app.get('/destroy' , (req,res)=>{
    // req.session.destroy()
    res.clearCookie('connect.sid')
    res.send('Cookie clear')
    // res.redirect('/')
})

app.listen(5556 , ()=>{
    console.log('Server connected')
})