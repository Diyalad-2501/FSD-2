var expr = require('express') 
var app = expr()

// app.get('/name/:name/age/:age' , (req,res)=>{
//     res.send(req.params)
// })

app.get('/:name/:age' , (req,res)=>{
    res.send(req.params)
})

app.listen(5008 , ()=>{
    console.log('Connected')
})