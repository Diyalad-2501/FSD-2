var expr = require('express')
router = expr.Router()

const mvi = [{id:'101' , name:'DON-1' , year : '2006'},
    {id:'102' , name:'DON-2' , year : '2012'},
    {id:'103' , name:'DON-3' , year : '2103'}]

// app.get('/m' , (req,res)=>{
//     res.json(mvi)
// })

router.get('/m/:id' , (req,res)=>{
    cm = mvi.filter((a)=> a.id === req.params.id)

    if(cm.length===1){
        res.json(cm[0])
    }
    else{
        res.send('No data found')
    }
})

module.exports = router