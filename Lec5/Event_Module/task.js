// make 4 function , 1.photo 2.cateror , 3.decorator  4.bride groom   
//  decorator  , cateror , photo , bride groom

e = require('events')

ee = new e()

p = function(){
    console.log('Photographer')
}

c = function (){
    console.log('Cateror')
}

d=  function (){
    console.log('Decorator')
}

b_g =  function (){
    console.log('Bride and groom')
}

ee.on('marriage',d)
ee.on('marriage',c)
ee.on('marriage',p)
ee.on('marriage',b_g)
console.log('Check my position')
ee.emit('marriage')
console.log('Thank You')