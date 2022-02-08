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
        const page = req.query.page || 1;
        const size = req.query.size || 10;
        const user=await User.find()
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await User.find().countDocuments())/size
        );

        return res.send({user,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

module.exports=router;