const express = require("express");

const router = express.Router();

const Student= require("../models/student.model");



//db.students.find()
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
      const student = await Student.create(req.body);
  
      return res.status(201).send(student);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.get("", async (req, res) => {
    // thennable => proper then
    try {
      const students = await Student.find()
      .populate({ path: "user_id" })
      .lean().exec(); // db.students.find() // proper promise
  
      return res.send(students);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  // met + route => get /${variable} and the name of variable is id
  router.get("/:id", async (req, res) => {
    try {
      const student = await Student.findById(req.params.id).lean().exec();
  
      if (student) {
        return res.send(student);
      } else {
        return res.status(404).send({ message: "student not found" });
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  // met + route => patch /${variable} and the name of variable is id
  router.patch("/:id", async (req, res) => {
    try {
      const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      res.status(201).send(student);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  // met + route => delete /${variable} and the name of variable is id
  router.delete("/:id", async (req, res) => {
    try {
      const student = await Student.findByIdAndDelete(req.params.id).lean().exec();
  
      res.send(student);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  module.exports=router;
  