expr = require('express')
app = expr()
app.use(expr.urlencoded({extended:true}))

app.set('view engine','ejs')
app.get('/' , (req,res)=>{
    res.render('task2_in')
})

app.post('/contact' , (req,res)=>{
    fname = req.body.fname
    email = req.body.email
    res.render('task2_out' , {fname , email})
})

app.listen(5555)