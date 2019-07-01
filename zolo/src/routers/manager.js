const User = require('../models/user')
const express = require('express')
const auth = require('../middleware/auth')
const reveiw = require('../models/reveiws')
const porperty  = require('../models/property')

const router = new express.Router()

router.get('/manager',async(req,res) => {
    
    try{
    const user = req.query.user1
    if(!user || user.manager===false)
    {
        throw new Error("Not a manager")
    }

    const allprops = await porperty.find({})
    res.status(200).send(allprops)

}catch(e)
{
    res.status(400).send(e)
}


})




module.exports = router