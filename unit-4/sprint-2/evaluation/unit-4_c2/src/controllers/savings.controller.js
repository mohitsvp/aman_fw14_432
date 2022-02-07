const express = require("express");

const router = express.Router();

const Savings = require("../models/savingsaccount.model");

router.post("", async (req,res) => {
    try{
        const savings=await Savings.create(req.body);
        return res.send(savings);
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("", async (req,res) => {
    try{
        const savings=await Savings.find()
        .populate({path:"user_id"})
        .populate({path:"branch_id"})
        .lean().exec();
        return res.send(savings);
    }catch(err){
      return res.send(err.message);
    } 
});

module.exports=router;