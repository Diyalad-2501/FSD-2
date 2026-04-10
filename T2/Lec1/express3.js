var expr = require('express')
var app = expr()

app.get('/' , (req,res)=>{
    res.set('Content-type' , 'text/html')
    res.send('How are u?')
})

app.get('/about' , (req,res)=>{
    res.send('About Page')
})

app.listen(5678,()=>{
    console.log('Server connected')
})