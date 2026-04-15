expr =  require('express')
app = expr()

app.get('/' , (req,res)=>{
    res.send(`<form>
        username: <input type="text" name='uname'><br>
        Passwod: <input type="password" name='pass'><br>
        Message: <textarea rows="5" cols="10" name='msg'></textarea>
        <button type="submit">Submit</button>
    </form>`)
})

app.post('/login', (req,res)=>{
    
})