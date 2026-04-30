var expr = require('express')
router = expr.Router()

const placesILove = [

  { name: 'Ahmedabd',country: 'India', state: 'Gujarat', city: 'Ahmedabad',  rating: 10  },

  {name: 'Mumbai', country: 'India',  state: 'Maharashtra', city: 'Mumbai', rating: 9  },

  { name: 'Nairobi', country: 'Kenya',  state: 'Nairobi County', city: 'Nairobi',  rating: 8  },

  { name: 'Melbourne', country: 'Australia',  state: 'Victoria', city: 'Melbourne',  rating: 10  }

];

router.get('/:rating' , (req,res)=>{
    cm = placesILove.filter((a)=> a.rating.toString() === req.params.rating.toString())
    res.write(JSON.stringify(cm))
    res.send()
})

module.exports = router