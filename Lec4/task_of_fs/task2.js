fs = require('fs')
var a =[{'Name':'Diya' , 'Age':19} , {'Name':'Sarinah' , 'Age':19}]
fs.writeFileSync('t2.txt', JSON.stringify(a))

var data = fs.readFileSync('t2.txt' ,'utf-8')
console.log(data)