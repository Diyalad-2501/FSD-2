const obj = require('./d.json')
console.log(obj)
console.log(obj.name)
// document.writeln(obj)
// document.writeln(obj.name)

var a = {"book":[
        {"id":1 , "name":"php" , "version":"2nd" , "author":["abc","pqr"]},
        {"id":2 , "name":"Java" , "version":"3rd" , "author":"J.sphered"}]}

console.log(a.book[1].id)
console.log(a.book[0].author[1])
console.log(a.book[1].name)
console.log(`We have ${a.book[1].name} but version is ${a.book[1].version} & author is ${a.book[1].author}`)

 let p = {name:"abc" , age:30}
// let p.age = 20
// console.log(p.age) //SyntaxError
let key = "age"
p[key]=45
console.log(p)