const express = require("express");

const router = express.Router();

const Branch = require("../models/branch.model");

router.post("", async (req,res) => {
    try{
        const branch=await Branch.create(req.body);
        return res.send(branch);
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("", async (req,res) => {
    try{
        const branch=await Branch.find().lean().exec();
        return res.send(branch);
    }catch(err){
      return res.send(err.message);
    } 
});

module.exports=router;