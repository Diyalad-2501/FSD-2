expr = require('express')
app = expr()
multer = require('multer')

app.use(expr.static('./' , {index:'upload.html'}))

var storage = multer.diskStorage({
    destination:'hello',
    filename : function(req,file,cb){
        // cb(null,file.fieldname)
        cb(null , file.originalname)
    }
})

var upload = multer({storage})

app.post('/data' , upload.single('mypic') , (req,res)=>{
    const file = req.file
    if(file){
        res.send(file.originalname + file.fieldname)
    }
})

app.listen(3006)