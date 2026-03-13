var pm = require("path");
// Path.basename()
// Path.extname()
// Path.dirname()
// Path.Parse()

var a = pm.basename("D:/FSD-2_B1/Lec4/data.txt");
console.log(a);

var b = pm.extname("D:/FSD-2_B1/Lec4/data.txt")
console.log(b)

var c = pm.dirname("D:/FSD-2_B1/Lec4/data.txt")
console.log(c)

var d = pm.parse("D:/FSD-2_B1/Lec4/data.txt")
console.log(d)

if(d.ext == '.txt'){
    console.log('File is text based')
}
else{
    console.log('Not a text file')
}