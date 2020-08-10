const express = require('express');
const Ninja = require('../models/ninja');
const router = express.Router();



//get a list of ninjas

router.get('/ninjas',function(req,res,next){

    res.send({type:'GET'});
})
// add a new ninja
router.post('/ninjas',function(req,res,next){

    Ninja.create(req.body).then(function(ninja){
        res.send(ninja)
    }).catch(next);
    
    
})

router.put('/ninjas/:id',function(req,res,next){

    res.send({type:'PUT'});
})

router.delete('/ninjas/:ID',function(req,res,next){
    Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
        res.send(ninja);
    })
    
})


module.exports = router ;
