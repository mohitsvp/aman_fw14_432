const express = require("express");

const path =require("path");

const {body ,validationResult} =require("express-validator");
const router = express.Router();

const User = require("../models/user.model");

const upload = require("../middlewares/file-upload");


router.post("/single",upload.single("profile_pic") ,async (req,res) => {
    try{
     const user = await User.create({
         name:req.body.name,
         dob:req.body.dob,
         profile_pic:req.file.path,
     })
     return res.send(user);
        
    }catch(err){
      return res.send(err.message);
    } 
});
router.post("/multiple",upload.any("profile_pic") ,async (req,res) => {
    try{
    const filePaths=req.files.map((file) => file.path);
     const user = await User.create({
         name:req.body.name,
         dob:req.body.dob,
         profile_pic:filePaths,
     })
     return res.send(user);
        
    }catch(err){
      return res.send(err.message);
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