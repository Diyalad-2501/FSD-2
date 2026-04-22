expr = require('express')
app = expr()
ss = require('express-session')
app.use(expr.static('./' , {index:'form.html'}))
app.use(ss({
    secret : 'My Session',
    resave : false ,
    saveUninitialized : false
}))

app.get('/data' , (req,res)=>{
    req.session.fname = req.query.username
    req.session.pwd = req.query.password
    res.redirect('/fetch')
})

app.get('/fetch',(req,res)=>{
    res.set('Content-type' , 'text/html')
    res.write(`Welcome ${req.session.fname}`)
    res.write(`<br><a href='/destroy'>Logout</a>`)
    res.write(`<br>Good bye`)
    res.send()
})

app.get('/destroy' , (req,res)=>{
    // req.session.destroy()
    res.clearCookie('connect.sid')
    res.send('Cookie clear')
    // res.redirect('/')
})

app.listen(5555 , ()=>{
    console.log('Server connected')
})