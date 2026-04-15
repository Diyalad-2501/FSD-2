expr = require('express')
app = expr()

// app.use(expr.static("../public"))
app.use(expr.static("../public" , {index : 'jambo.html'}))
app.listen(5678 , ()=>{ console.log('Start')})

// ./  => all file in one folder 
//  ../public => industry approch 
//  ../  =>logic file in src ,
//  public => non logic file in public