expr = require('express')
app = expr()
cp = require('cookie-parser')
app.use(cp())
app.use(expr.static('./' , {index : 'task2.html'}))
app.use(expr.urlencoded({extended:true}))

app.post('/submit-feedback' , (req,res)=>{
    const{name , email , message , rating } = req.body
    const fb = {name , email , message , rating}

    res.cookie('feedback' , fb , {maxAge :10000})
    res.send(`Thank you for your feedback <br><a href='feedback-details'>Show Feedback</a>`)
})

app.get('/feedback-details' , (req,res)=>{
    data = req.cookies.feedback
    if(data){
        res.write(`<b>Name</b> ${data.name}`)
        res.write(`<br><b>Email</b> ${data.email}`)
        res.write(`<br><b>Message</b>${data.message}`)
        res.write(`<br> <b>Rating</b>${data.rating}`)
    }
    else{
        res.write("No data available")
    }
    res.write(`<br><a href="/">Logout </a>`)
    res.send()
})

app.listen(7780)