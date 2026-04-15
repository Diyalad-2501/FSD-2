var expr = require('express')
var app = expr()

app.get('/',(req , res)=>{
    res.set('Content-Type' , 'text/html') // or res.type('text/html')
    res.send('<h1> Hellooooo </h1>')
})
app.listen(5006 , ()=>{
    console.log('Server connected')
})

// app.post('/',(req , res)=>{ error cannot GET/
//     res.set('Content-Type' , 'text/html') // or res.type('text/html')
//     res.send('<h1> Hellooooo </h1>')
// })
// app.listen(5006 , ()=>{
//     console.log('Server connected')
// })

// app.method(Path , handler)
// app.get
// app.post
// app.put
// app.delete
// app.use
// app.all
// res.set()
// res.write() if we are using write then send() must be empty
// res.end()
// res.send() it can set mime type according to data
// res.json()
// res.sendFile()
// res.redirect()
// res.render()
// req.url
// req.Params
// req.query
// req.body we have to make middleware using use 
