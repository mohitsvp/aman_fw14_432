const express = require("express");

const router = express.Router();

const Batch= require("../models/batch.model");



//db.batchs.find()
// User => db.users

// admin, user, student, teacher, IA, SDE1

/*
  work with users collection
  GET => get /users
  POST => post /users
  GET SINGLE ITEM => get /users/:id
  UPDATE SINGLE ITEM => patch /users/:id
  DELETE SINGLE ITEM => delete /users/:id
*/

// ----------------------------- USERS CRUD -----------------------------------

router.post("", async (req, res) => {
    try {
      const batch = await Batch.create(req.body);
  
      return res.status(201).send(batch);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.get("", async (req, res) => {
    // thennable => proper then
    try {
      const batchs = await Batch.find()
      .populate({ path: "user_id" })
      .lean().exec(); // db.batchs.find() // proper promise
  
      return res.send(batchs);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  // met + route => get /${variable} and the name of variable is id
  router.get("/:id", async (req, res) => {
    try {
      const batch = await Batch.findById(req.params.id).lean().exec();
  
      if (batch) {
        return res.send(batch);
      } else {
        return res.status(404).send({ message: "batch not found" });
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  // met + route => patch /${variable} and the name of variable is id
  router.patch("/:id", async (req, res) => {
    try {
      const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      res.status(201).send(batch);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  // met + route => delete /${variable} and the name of variable is id
  router.delete("/:id", async (req, res) => {
    try {
      const batch = await Batch.findByIdAndDelete(req.params.id).lean().exec();
  
      res.send(batch);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  module.exports=router;
  