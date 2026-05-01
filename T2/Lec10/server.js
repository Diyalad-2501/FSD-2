expr = require('express')
app = expr()
app.use(expr.urlencoded({extended:true}))

app.set('view engine','ejs')
app.get('/' , (req,res)=>{
    res.render('form')
})

app.post('/data' , (req,res)=>{
    fname = req.body.fname
    marks = req.body.marks
    res.send(`Marks of ${fname} is ${marks}`)
})

app.listen(5555)