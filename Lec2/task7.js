const person =[
{
name: "PQR", age: 38
},
{
name: "ABC", age: 35
},
{
name: "XYZ", age: 47
}
]

var x = person.sort((a,b)=> b.age - a.age)[0]
console.log(x)