const express = require("express");

const router = express.Router();

const Fixed = require("../models/fixedaccount.model");

router.post("", async (req,res) => {
    try{
        const fixed=await Fixed.create(req.body);
        return res.send(fixed);
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("", async (req,res) => {
    try{
        const fixed=await Fixed.find()
        .populate({path:"user_id"})
        .lean().exec();
        return res.send(fixed);
    }catch(err){
      return res.send(err.message);
    } 
});

module.exports=router;