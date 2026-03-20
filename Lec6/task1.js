// make a file named result.txt & insert text 'avg.mark of ABC student'
data = "https://localhost:8000/test?T1=25&T2=24&T3=25#ABC"
u = require('url')
fs = require('fs')
process.noDeprecation = true
var q = u.parse(data , true) 
d = q.query
console.log(q.hash)
avg =(parseInt(d.T1) + parseInt(d.T2) +parseInt(d.T3))/3
console.log(avg)

fs.writeFileSync('index.html' , `Avg mark of ${q.hash} student is ${avg} `)