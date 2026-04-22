const { urlencoded } = require('express')

expr = require('express')
app = expr()
ss = require('express-session')
app.use(ss({
    secret : 'My123',
    resave : false,
    saveUninitialized : false
}))

app.use(urlencoded({extended : true}))
app.use(expr.static('../public'))

app.post('/login' , (req,res)=>{
    req.session.uname = req.body.username
    req.session.pwd = req.body.password
    res.redirect('/order.html')
})

app.post('/order' , (req,res)=>{
    req.session.product = req.body.product
    req.session.quantity = req.body.quantity
    res.redirect('/summary')
})

app.get('/summary' , (req,res)=>{
    res.set('Content-type' , 'text/html')
    res.write(`Welcome ${req.session.uname}`)
    res.write(`<br>Your have order ${req.session.product} product in ${req.session.quantity} quantity`)
    res.write(`<br><a href="/destroy">Logout</a>`)
    res.send()
})

app.get('/destroy' ,(req,res)=>{
    req.session.destroy()
    res.redirect('/')
})

app.listen(5557)