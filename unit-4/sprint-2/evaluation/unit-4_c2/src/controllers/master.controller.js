const express = require("express");

const router = express.Router();

const Master = require("../models/masteraccount.model");

router.post("", async (req,res) => {
    try{
        const master=await Master.create(req.body);
        return res.send(master);
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("", async (req,res) => {
    try{
        const master=await Master.find().lean().exec();
        return res.send(master);
    }catch(err){
      return res.send(err.message);
    } 
});

module.exports=router;