fs  =  require('fs')
e = require('events')
ee = new e()
ee.on('create',()=>{
    fs.writeFile('t1.txt' ,'This is data' ,
    (err)=>{
    if(err) throw err
    ee.emit('update')
} )})

ee.on('update',()=>{fs.appendFile('t1.txt' , '\nThat is data',
    (err)=>{
    if(err) throw err
        ee.emit('read')
})})

ee.on('read' , ()=>{
 fs.readFile('t1.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
    ee.emit('finish')
 })
})

ee.on('finish',()=>{console.log('Thanks for using my program')})

ee.emit('create')