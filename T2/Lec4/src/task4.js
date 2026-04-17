expr = require('express')
app = expr()
app.use(expr.urlencoded({extended:true}))
app.use(expr.static('../public' , {index:'task4.html'}))
app.post('/process-post' , (req,res)=>{
    uname = req.body.firstname
    res.write(`<p style="color : red"> ${uname} </p>`)
    res.write(`<p style="color : green"> ${req.body.password} </p>`)
    res.write(`<p style="color : black"> ${req.body.r1} </p>`)
    res.send()
})

app.listen(5068)