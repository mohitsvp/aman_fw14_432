const express = require("express");

const path =require("path");

const {body ,validationResult} =require("express-validator");
const router = express.Router();

const User = require("../models/user.model");

const upload = require("../middlewares/file-upload");


router.post("",upload.single("profile_pic") ,async (req,res) => {
    try{
     const user = await User.create({
         first_name:req.body.first_name,
         last_name:req.body.last_name,
         profile_pic:req.file.path,
     })
     return res.send(user);
        
    }catch(err){
      return res.send(err.message);
    } 
});

router.patch("/:id",upload.single("profile_pic"),async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        profile_pic:req.file.path,
      })
        .lean()
        .exec();
  
      res.status(201).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id).lean().exec();
  
      res.send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });


router.get("", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 10;
        const user=await User.find()
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await User.find().countDocuments())/size
        );

        return res.send({user,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

module.exports=router;