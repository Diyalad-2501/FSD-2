// addr="http://localhost:8000/default.html?year=2026&month=march#warupdate"
addr = 'http://localhost:8080/data?name=Jay&age=25'

// let q = new URL(addr)
// console.log(q)

let q = new URL(addr)
console.log(q)
console.log(q.searchParams.get('name'))
console.log(q.searchParams.get('age'))