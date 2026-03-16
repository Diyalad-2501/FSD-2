e = require('events')
ee = new e()

ee.on('Circle' , (radius)=>{
    if(radius < 0){
        console.log('Radius must be positive')
    }
    else{
        console.log(`Perimeter of circle :${2*3.14*radius}`)
    }
})

ee.on('Square' , (side)=>{
    if(side < 0){
        console.log('Sides must be positive')
    }
    else{
        console.log(`Perimeter of square :${4*side}`)
    }
})

ee.emit('Circle',-2)
ee.emit('Square',-4)