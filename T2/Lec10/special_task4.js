expr = require('express')
app = expr()
app.use(expr.urlencoded({extended:true}))

app.set('view engine','ejs')
app.get('/' , (req,res)=>{
    res.render('special_task4_in')
})

app.post('/result' , (req,res)=>{
    name = req.body.name
    age = req.body.age
    skill = req.body.skill
    exp = req.body.experience
    res.render('special_task4_out' , {name , age , skill , exp})
})

app.listen(5555)