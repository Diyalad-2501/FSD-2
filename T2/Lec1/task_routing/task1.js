// Write an express js script to define one JSON array of 3 objects having properties name and age. 
// Short these objects according to age. If user request sorted names in url 
// then all names along with age should be printed according to descending order of age.
//  Also, display these sorted values on “Sort page” and display JSON object on “Home page”.

var expr = require('express')
var app = expr()

data = [{name : 'Diya' , age: 18} , {name : 'Jatin' , age: 19} , {name : 'Sarinah' , age: 16}]


app.get('/' , (req,res)=>{
    res.json(data)
})

app.get('/sort' , (req,res)=>{
    sorted = data.sort((a,b)=>b.age - a.age)
   for(i of sorted){
    res.write("<h1>"+i.name+"="+i.age+"</h1>")
   }

   res.send()
})

app.listen(5000 , ()=>{
    console.log('Connected')
})