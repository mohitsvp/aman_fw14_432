const express = require("express");

const router = express.Router();

const Post = require("../models/post.model");


router.post("",async(req,res) => {
    try{
       if(req.body !=null || req.image != null){
        const post = await Post.create(req.body);
        return res.send(post);
       }
    }catch(err){
        return res.send(err.message);
    }
})

router.get("",async(req,res) => {
    try{
        const post = await Post.find()
        .populate({path:"user_id"})
        .lean().exec();
        return res.send(post);
    }catch(err){
        return res.send(err.message);
    }
})

module.exports=router;