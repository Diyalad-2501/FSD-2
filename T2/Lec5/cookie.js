expr = require('express')
app = expr()
cp = require('cookie-parser')
app.use(cp())
app.use(expr.static('./' , {index:'form.html'}))
app.use(expr.urlencoded({extended:true}))

app.post('/next' , (req,res)=>{
    res.cookie('fname' , req.body.fname)
    res.cookie('lname' , req.body.lname)
    res.cookie('email' , req.body.email)
    // res.send(req.cookie)
    res.redirect('/data')
})

app.get('/data' , (req,res)=>{
    res.send(`Welcome ${req.cookies.fname} ${req.cookies.lname}`)
})

app.listen(7790)