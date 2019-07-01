const property = require('../models/property')
const express = require('express')
const auth = require('../middleware/auth')


const router = new express.Router()

router.post('/property/create',auth,async (req,res) => {
    //Shorthand Syntax to get everything from req.body in object prop1
    
    try{
    if(req.user.manager === true)
    {
    const prop1 = new property(req.body)
    await prop1.save()

    res.status(200).send(prop1)
    }
    else{
        throw new Error("You are not authorised")
    }
    }catch(e)
    {
        res.status(400).send({Error:"Property could not be created"})
    }

})

//Update property but id of property is sent by query "_id"
router.patch('/property/update',auth, async(req,res)=>{

    console.log("In")
    try{
        if(req.user.manager === true)
        {
        const prop1 = await property.findOne({_id:req.query._id})
        console.log(prop1)
        Object.assign(prop1,req.body)
        
        await prop1.save()
    
        res.status(200).send(prop1)
        }
        else{
            throw new Error("You are not authorised")
        }
        }catch(e)
        {
            res.status(400).send({Error:"Property could not be updated"})
        }
    
})

//send id of the property in url to get all the reveiws
router.get('/property/reveiw/:id',async (req,res) => {

    try{
    const prop1 = await property.findOne({_id:req.params.id})
    console.log(prop1)
    await prop1.populate({
        path:'reveiws'
    }).execPopulate()
    res.send(prop1)
}catch(e)
{
    res.status(404).send({Error:"No reveiws found"})
}
})






module.exports = router