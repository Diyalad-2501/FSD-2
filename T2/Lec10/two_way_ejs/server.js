expr = require('express')
app = expr()
app.use(expr.urlencoded({extended:true}))

app.set('view engine','ejs')
app.get('/' , (req,res)=>{
    res.render('in')
})

app.post('/data' , (req,res)=>{
    fname = req.body.fname
    marks = req.body.marks
    res.render('out',{fname , marks})
})

app.listen(5555)