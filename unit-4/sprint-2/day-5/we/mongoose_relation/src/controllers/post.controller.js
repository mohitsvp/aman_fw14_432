const express = require("express");

const router = express.Router();

const Post=require("../models/post.model");


/*
  work with posts collection
  GET => get 
  POST => post 
  GET SINGLE ITEM => get /:id
  UPDATE SINGLE ITEM => patch /:id
  DELETE SINGLE ITEM => delete /:id
*/

// ----------------------------- POST CRUD -----------------------------------
router.get("", async (req, res) => {
    try {
      const posts = await Post.find()
        .populate({ path: "user_id", select: ["first_name", "last_name"] })
        .populate({ path: "tag_ids", select: "name" })
        .lean()
        .exec();
  
      return res.send(posts);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.post("", async (req, res) => {
    try {
      const posts = await Post.create(req.body);
  
      return res.send(posts);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).lean().exec();
  
      return res.send(post);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
  
      return res.send(post);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.send(post);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });



module.exports=router;