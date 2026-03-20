var u = require('url')
let addr = "http://localhost:8000/default.html?year=1900&month=march#warupdate"
process.noDeprecation = true
var q = u.parse(addr,true)
console.log(q)
console.log(q.port)
d = q.query
console.log(d)
console.log(d.year)
console.log(d.month)

if ((d.year%4==0 && d.year%100!=0 )|| (d.year%400==0 )){
    console.log('Leap year')
}
else{
     console.log("Not leap")
}
console.log(q.search)

