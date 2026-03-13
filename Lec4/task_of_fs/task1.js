fs = require('fs')

fs.writeFileSync('t1.txt',"0 1 -9 20 33 -44 50")

var data = fs.readFileSync('t1.txt' , 'UTF-8')

console.log(data)

data2 = data.split(' ').sort((a,b)=>a-b)
console.log(data2)