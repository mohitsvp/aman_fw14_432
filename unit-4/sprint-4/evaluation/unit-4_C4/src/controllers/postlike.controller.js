const express = require("express");

const router = express.Router();

const Postlike = require("../models/postlike.model");


router.post("",async(req,res) => {
    try{
        const postlike = await Postlike.create(req.body);
        return res.send(postlike);
       
    }catch(err){
        return res.send(err.message);
    }
})

router.get("",async(req,res) => {
    try{
        const postlike = await Postlike.find()
        .populate({path:"post_id",path:"user_id"})
        .lean().exec();
        return res.send(postlike);
    }catch(err){
        return res.send(err.message);
    }
})

module.exports=router;