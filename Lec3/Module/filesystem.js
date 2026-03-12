let fs = require('fs')                               
// fs.writeFileSync("hello.txt" , "how are u ?")

// var data = fs.readFileSync("hello.txt")
// console.log(data.toString())

// fs.mkdirSync('B1')
// fs.writeFileSync('B1/l.txt','Diya')
// var data = fs.readFileSync('B1/l.txt','UTF-8')
// console.log(data)

// fs.renameSync('B1/l.txt' , 'B1/l1.txt')

// fs.unlinkSync('B1/l1.txt')

// fs.rmdirSync('B1')

fs.writeFile('data.txt' , 'Asyncoperation',function(err){
    if (err){
        console.log(err)
    }
    else{
        console.log('File operation completed')
    }
})


// fs.writeFile('hello/data.txt' , 'Asyncoperation',function(err){
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log('File operation completed')
//     }
// })

fs.readFile('data.txt' , 'UTF-8' , function(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
})

console.log('Program ended')

