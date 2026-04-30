// write express js code and create json object
//  with name data=[{id: , name: , branch , contact: , ciyt:}] 
//  /api page all the content showed be show , on passing id that content should be show 
// on passing branch it showed content containing that branch

expr = require('express')
router = expr.Router()

const data = [{id:'101' , name:'Diya' , branch:'CSE' , contact:9723448693 , city:'Vapi'},
    {id:'102' , name:'Jenish' , branch:'CE' , contact:9723458693 , city:'Vapi'},
    {id:'103' , name:'Baba' , branch:'CSE' , contact:7654324456 , city:'Ahemdabad'},
    {id:'104' , name:'Aapi' , branch:'CSE' , contact:9876567896 , city:'Ahemdabad'},
    {id:'105' , name:'Krishna' , branch:'BCA' , contact:9466767856 , city:'Vapi'},
]

router.get('/' , (Req,res)=>{
    res.json(data)
})

router.get('/:id' , (req,res)=>{
    cm = data.filter((a)=> a.id === req.params.id)
    if(cm.length===1){
        res.json(cm[0])
    }
    else{
        res.send('No data found')
    }
})

router.get('/branch/:branch' , (req,res)=>{
    cm = data.filter((a)=>a.branch.toLowerCase() === req.params.branch.toLowerCase())
    res.write(JSON.stringify(cm))
    res.send()
})

module.exports = router