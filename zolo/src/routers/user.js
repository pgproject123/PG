const User = require('../models/user')
const express = require('express')
const auth = require('../middleware/auth')
const reveiw = require('../models/reveiws')
const porperty  = require('../models/property')

const router = new express.Router()

//Create Account and Go to home page
router.post('/users/create',async (req,res) => {
    const user = new User(req.body)
    console.log(user)

    try {
        
        await user.save()
        
        

        const token = await user.generateAuthToken()
       // res.status(201).send({ user, token })
       if(user.manager === false)
       {
        res.redirect('/home?user1=' +user)
       }
       else 
       {
        res.redirect('/manager?user1=' + user)

       }
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req,res)=> {


    try{

    const user = await User.findCredentials(req.body.email,req.body.password)

    const token = await user.generateAuthToken()
    if(user.manager === false)
    res.redirect('/home?user1=' + user)

    else
    res.redirect('/manager?user1=' + user)

    }catch(e)
    {
        
        res.status(400).send({Error:"LoginFAiled"})
    }




})

//If in the query user1 is sent we will return property and user object
router.get('/home',async(req,res) => {
    
    try{
        const allprops = await porperty.find({})
    
       
        const user = req.query.user1
       
        
        if(user)
        res.send({user,allprops}) //All properties sent along with the user details

        else
        res.send(allprops) //If directly home page opened sent a list of properties
    }catch(e)
    {
        res.status(404).send()
    }
})




//Logout of particular session
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.status(200).send({status:"Logged out"})
    } catch (e) {
        res.status(500).send({Error:"Logout Failed"})
    }
})

//Logout of all sessions
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.status(200).send({status:"Logged out"})
    } catch (e) {
        res.status(500).send({Error:"Logout Failed"})
    }
})

//params have porperty id and auth has user id
router.post('/reveiws/:id',auth, async(req,res)=> {

    try{
        const newReveiw = new reveiw({
            ...req.body,
            owner: req.user._id,
            forProperty:req.params.id
        })
        await newReveiw.save()
        res.status(200).send(newReveiw)

    }catch(e)
    {
        res.status(404).send()
    }

})

module.exports = router
