// fs = require('fs')

// fs.writeFile('Lec1.txt' , 'JSON' , (err)=>{
//     if(err) throw err
//     console.log('Write operation Demo')
// })

// fs.appendFile('Lec1.txt' , 'We are student of 4th sem-cse branch' , (err)=>{
//     if(err) throw err
//     console.log('Append operation Demo')
// })

// fs.readFile('Lec1.txt','UTF-8',(err , data)=>{
//     if(err) throw err
//     console.log(err)
// })

// console.log('Process end')

// to maintain sequences
fs = require('fs')

fs.writeFile('Lec1.txt' , 'JSON' , (err)=>{
    if(err) throw err
    console.log('Write operation Demo')

fs.appendFile('Lec1.txt' , '\nWe are student of 4th sem-cse branch' , (err)=>{
    if(err) throw err
    console.log('Append operation Demo')

fs.readFile('Lec1.txt','UTF-8',(err , data)=>{
    if(err) throw err
    console.log(data)
})
})
})

console.log('Process end')