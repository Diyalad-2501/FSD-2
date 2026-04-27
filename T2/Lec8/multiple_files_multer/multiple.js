expr = require('express')
app = expr()
multer = require('multer')

app.use(expr.static('./'))

var storage = multer.diskStorage({
    destination:'hii',
    filename : function(req,file,cb){
        // cb(null,file.fieldname)
        cb(null , file.originalname)
    }
})

var upload = multer({storage})

app.post('/data' , upload.array('mypic') , (req,res)=>{
    const file = req.files
    if(file){
        for(i of file){
            res.write(i.originalname +" "+i.fieldname)
        }
    }
    else{
        res.write('File not found')
    }
    res.send()
})

app.listen(3006)