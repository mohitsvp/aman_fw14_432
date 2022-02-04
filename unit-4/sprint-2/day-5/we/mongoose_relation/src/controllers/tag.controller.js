const express = require("express");

const router = express.Router();

const Tag=require("../models/tag.model");

/*
  work with tags collection
  GET => get /tags
  POST => post /tags
  GET SINGLE ITEM => get /tags/:id
  UPDATE SINGLE ITEM => patch /tags/:id
  DELETE SINGLE ITEM => delete /tags/:id
*/

// ----------------------------- TAG CRUD -----------------------------------
router.post("", async (req, res) => {
    try {
      const tag = await Tag.create(req.body);
  
      return res.send(tag);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.get("", async (req, res) => {
    try {
      const tags = await Tag.find().lean().exec();
  
      return res.send(tags);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const tag = await Tag.findById(req.params.id).lean().exec();
  
      return res.send(tag);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
  
      return res.send(tag);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const tag = await Tag.findByIdAndDelete(req.params.id);
  
      return res.send(tag);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  



module.exports=router;