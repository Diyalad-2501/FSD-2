e = require('events')

ee = new e()

ee.on('connection' , ()=>{
    console.log('Connection successfully')
})

ee.on('data received' , ()=>{
        console.log('Data received successfully')
    })

ee.emit('connection')
ee.emit('data received')
console.log('Thank You')

