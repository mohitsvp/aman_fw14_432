const express = require("express");

const router = express.Router();

const Submission= require("../models/submission.model");

// ----------------------------- USERS CRUD -----------------------------------

router.post("", async (req, res) => {
    try {
      const submission = await Submission.create(req.body);
  
      return res.status(201).send(submission);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.get("", async (req, res) => {
    // thennable => proper then
    try {
      const submissions = await Submission.find()
      .populate({path:"user_id"})
      .populate({path:"evaluation_id"})
      .lean().exec(); // db.submissions.find() // proper promise
  
      return res.send(submissions);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.get("/max-marks", async (req, res) => {
    try {
      const submissions = await Submission.find()
      .populate({path:"user_id"})
      .populate({path:"evaluation_id"})
      .lean().exec();
  
      let finalsubmissions = submissions.map((product) => {
        return product.marks;
      });
  
      const maxLength = Math.max(...finalsubmissions);
  
      finalsubmissions = submissions.filter((product) => {
        return product.marks === maxLength;
      });
  
      return res.status(200).send(finalsubmissions);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  // met + route => get /${variable} and the name of variable is id
  router.get("/:id", async (req, res) => {
    try {
      const submission = await Submission.findById(req.params.id).lean().exec();
  
      if (submission) {
        return res.send(submission);
      } else {
        return res.status(404).send({ message: "submission not found" });
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });


  
  // met + route => patch /${variable} and the name of variable is id
  router.patch("/:id", async (req, res) => {
    try {
      const submission = await Submission.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      res.status(201).send(submission);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  // met + route => delete /${variable} and the name of variable is id
  router.delete("/:id", async (req, res) => {
    try {
      const submission = await Submission.findByIdAndDelete(req.params.id).lean().exec();
  
      res.send(submission);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  module.exports=router;
  