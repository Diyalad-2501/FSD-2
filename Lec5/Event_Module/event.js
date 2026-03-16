var EventEmitter = require('events')

var ee = new EventEmitter()

ee.on('mrgfunciton' , ()=>{
    console.log('Hiiiiiiiiiiiiii')
})

ee.emit('mrgfunciton')

// event.addListener(Eventname , Listener)
// event.on()

