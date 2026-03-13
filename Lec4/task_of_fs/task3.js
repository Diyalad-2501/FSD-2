fs = require("fs");
fs.writeFileSync('a.txt','{"name":"pqr", "age":23}')
data = fs.readFileSync("a.txt",'UTF-8');

d = JSON.parse(data);
console.log(d.age);
