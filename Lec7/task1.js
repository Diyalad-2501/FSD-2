fs = require('fs')

var a = [{'name':'Rohit',  runs:52} ,{'name':'Kohli',  runs:96},{'name':'Gill',  runs:20},{'name':'Rahul',  runs:33},{'name':'Tilak',  runs:30}]

fs.writeFileSync('score.txt' , JSON.stringify(a))

var r = fs.readFileSync('score.txt' ,'utf-8')
r = JSON.parse(r)

r.push({'name':'Hardik',  runs:52})
console.log(r)
total=0
r.forEach(p =>total+=p.runs);

console.log(total)

let runrate = total/20
console.log(runrate)

updated = []
r.forEach(p=>{
    if(p.runs>50){
        updated.push({'name':p.name , 'runs':p.runs})
    }
})

console.log(updated)

fs.appendFileSync('score.txt' ,`\n${JSON.stringify(r)}`)
fs.appendFileSync('score.txt' ,`\n${JSON.stringify(total)}`)
fs.appendFileSync('score.txt' ,`\n${JSON.stringify(runrate)}`)
fs.appendFileSync('score.txt' ,`\n${JSON.stringify(updated)}`)