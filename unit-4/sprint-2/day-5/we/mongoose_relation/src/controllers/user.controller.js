const express = require("express");

const router = express.Router();

const User= require("../models/user.model");



//db.users.find()
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
      const user = await User.create(req.body);
  
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.get("", async (req, res) => {
    // thennable => proper then
    try {
      const users = await User.find().lean().exec(); // db.users.find() // proper promise
  
      return res.send(users);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  // met + route => get /${variable} and the name of variable is id
  router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id).lean().exec();
  
      if (user) {
        return res.send(user);
      } else {
        return res.status(404).send({ message: "User not found" });
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  // met + route => patch /${variable} and the name of variable is id
  router.patch("/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      res.status(201).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  // met + route => delete /${variable} and the name of variable is id
  router.delete("/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id).lean().exec();
  
      res.send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  module.exports=router;
  