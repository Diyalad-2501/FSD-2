expr = require('express')
app = expr()
multer = require('multer')

app.use(expr.static('./' , {index:'form.html'}))

var storage = multer.diskStorage({
    destination:'File',
    filename : function(req,file,cb){
        // cb(null,file.fieldname)
        cb(null , file.fieldname+"-file.pdf")
    }
})

var upload = multer({storage , 
    limit:{fileSize : 1024*1024}
})

app.post('/upload' , upload.single('data') , (req,res)=>{
    const file = req.file
    if(file){
        res.write(file.originalname+"has been uploaded")
    }
    else{
        res.write('File not found')
    }
    res.send()
})

app.listen(3006)