fs = require('fs')
pm = require('path')

let p = "FSD-mern/path.txt"
let dir = pm.dirname(p)
let fname = pm.basename(p)
let newpath = dir+"/"+fname

fs.mkdir(dir , (err)=>{
    if(err) throw err
    console.log('Directory created')

    fs.writeFile(newpath , 'Data write' , (err)=>{
        if(err) throw err
        console.log('Write file successfully')

        fs.copyFile(newpath , dir+"/temp.txt" , (err)=>{
            if(err) throw err
            console.log('Copy file succcessfully')

            fs.unlink(newpath , (err)=>{
                if(err)  throw err
                console.log('File deleted succesfully')

                console.log('All process ended')
            })
        })
    })
})