const express = require("express");

const router = express.Router();

const Comment = require("../models/comment.model");


router.post("",async(req,res) => {
    try{
        const comment = await Comment.create(req.body);
        return res.send(comment);
       
    }catch(err){
        return res.send(err.message);
    }
})

router.get("",async(req,res) => {
    try{
        const comment = await Comment.find()
        .populate({path:"user_id",path:"post_id"})
        .lean().exec();
        return res.send(comment);
    }catch(err){
        return res.send(err.message);
    }
})

module.exports=router;