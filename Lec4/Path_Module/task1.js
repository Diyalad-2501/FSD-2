var pm = require("path");
var d = pm.parse("D:/FSD-2_B1/Lec4/data.txt")
console.log(d)

if(d.ext == '.txt'){
    console.log('File is text based')
}
else{
    console.log('Not a text file')
}