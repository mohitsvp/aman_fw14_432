const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

router.post("", async (req,res) => {
    try{
        const user=await User.create(req.body);
        return res.send(user);
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("", async (req,res) => {
    try{
        const user=await User.find().lean().exec();
        return res.send(user);
    }catch(err){
      return res.send(err.message);
    } 
});

module.exports=router;