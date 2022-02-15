const express = require('express');

const User = require('../models/user.model');

const router = express.Router();

router.get("",async(req,res) => {
    try {
        const users = await User.find().lean().exec();
    
        if (req?.query?.contentType === "json") {
          return res.send(users);
        }
        return res.render("users/index.ejs", { users });
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
})

router.post("", async (req,res) => {
    try{
        const user =await User.create(req.body);
        const users =await User.find().lean().exec();
        return res.render("users/index.ejs",{users});
      }catch(err){
        return res.status(500).send({message:err.message});  
      }
})

router.get("/new", function (req,res) {
    return res.render("users/new.ejs");
})

router.patch("/:id", async function (req,res) {
    try{
        await User.findByIdAndUpdate(req.params.id,req.body).lean().exec();

        const users= await User.find().lean().exec();
        
        return res.render("users/index.ejs",{users});
      }catch(err){
        return res.status(500).send({message:err.message});  
      }
})

router.delete("/:id", async function (req,res) {
    try{
        await User.findByIdAndDelete(req.params.id).lean().exec();
        const users =await User.find().lean().exec();

        return res.render("users/index.ejs",{users});
      }catch(err){
        return res.status(500).send({message:err.message});  
      }
})

module.exports = router;