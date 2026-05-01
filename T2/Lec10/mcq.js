expr = require('express')
app = expr()
var a= 0

const same = function(req,res,next){
    a++
    res.write(`Hello ${a}`)
    res.send()
}

for(i=0 ; i<=5 ; i++){
    app.use('/hello',same)
}

app.listen(5500)