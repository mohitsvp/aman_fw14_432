const express = require("express");

const router = express.Router();

const Comment=require("../models/comment.model");

/*
  work with comments collection
  GET => get /comments
  POST => post /comments
  GET SINGLE ITEM => get /comments/:id
  UPDATE SINGLE ITEM => patch /comments/:id
  DELETE SINGLE ITEM => delete /comments/:id
*/

// ----------------------------- COMMENT CRUD -----------------------------------
router.get("", async (req, res) => {
    try {
      const comments = await Comment.find()
        .populate({
          path: "post_id",
          select: ["title", "body"],
          populate: [
            { path: "user_id", select: ["first_name", "last_name"] },
            { path: "tag_ids", select: ["name"] },
          ],
        })
        .lean()
        .exec();
  
      return res.send(comments);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.post("", async (req, res) => {
    try {
      const comment = await Comment.create(req.body);
  
      return res.send(comment);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id).lean().exec();
  
      return res.send(comment);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
  
      return res.send(comment);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const comment = await Comment.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
  
      return res.send(comment);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

module.exports=router;