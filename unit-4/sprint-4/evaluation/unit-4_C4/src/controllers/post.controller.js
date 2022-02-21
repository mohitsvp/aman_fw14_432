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
        const page = req.query.page || 1;
        const size = req.query.size || 10;
        const post = await Post.find().skip((page-1)*size).limit(size)
        .populate({path:"user_id"})
        .lean().exec();
        return res.send(post);
    }catch(err){
        return res.send(err.message);
    }
})

router.patch("/:id",async (req,res) => {
  try{
      const post = await Post.findByIdAndUpdate(req.params.id,req.body,{
          new:true,
      }).lean().exec();
      const ID = post.user_id
      if(req.user._id !== ID.toString()){
         return res.send("Permission Denied for you");
      }else{
        return res.send(post);
      }
  }catch(err){
      return res.send(err.message);
  }
});

module.exports=router;