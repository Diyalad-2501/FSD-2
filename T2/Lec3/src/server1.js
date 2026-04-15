expr = require('express')
app = expr()
path = require('path')

sp = path.join(__dirname , '../public')
// app.use(expr.static(sp , {index:'jambo.html'}))
app.use(expr.static(sp))
app.get('/' , (req , res)=>{
    res.sendFile(sp + '/index.html')
    // res.sendFile(sp + '/jambo.html')
})

app.listen(5000 , ()=>{
})