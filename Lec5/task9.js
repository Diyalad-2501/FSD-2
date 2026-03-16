fs =  require('fs')
e = require('events')
ee = new e()

ee.on('Create_dir',()=>{
    fs.mkdirSync('Test')
    ee.emit('Create_file')
})

ee.on('Create_file' ,()=>{
    fs.writeFileSync('Test/abc.txt' , 'Hiiiiiii')

    ee.emit('Update')
})

ee.on('Update', ()=>{
    fs.appendFileSync('Test/abc.txt','\nHeloooooo')
    console.log('Data Appended Successfully')
    ee.emit('Read')
})

ee.on('Read' ,()=>{
   d =  fs.readFileSync('Test/abc.txt','utf-8')
   console.log(d)

   ee.emit('Copy')
})

ee.on('Copy' , ()=>{
    fs.copyFileSync('Test/abc.txt' , 'Test/pqr.txt')
    ee.emit('Delete')
})

ee.on('Delete',()=>{
    fs.unlinkSync('Test/abc.txt')
    console.log('All operations performed successfully')
})

ee.emit('Create_dir')
