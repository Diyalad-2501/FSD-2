var expr = require('express')
var app = expr()
data = {name :'xyz' , age:24}

app.get('/',(req , res)=>{
    // res.set('Content-Type' , 'text/html') // or res.type('text/html')
    // res.set('Content-Type' , 'application/json')
    // res.write(JSON.stringify(data)) 
    // res.send(data) set mime type to json
    // res.json(data)

    res.write(data.age+" ") 
    res.send()
})
app.listen(5006 , ()=>{
    console.log('Server connected')
})