fs = require('fs')
d = {data:{a:15,b:20,c:[40,30]}}
fs.writeFileSync('input.txt' ,JSON.stringify(d) )

var data1  = fs.readFileSync('input.txt' ,'utf-8')
d1  = JSON.parse(data1)
add = d.data.a + d.data.b
sub = d.data.c[1] - d.data.b
mul = d.data.c[0] * d.data.c[1]
console.log(add)
console.log(sub)
console.log(mul)

fs.appendFileSync('input.txt' , '\nAdditon'+add+'\nSubtraction '+sub+'\nMultiplication'+mul)