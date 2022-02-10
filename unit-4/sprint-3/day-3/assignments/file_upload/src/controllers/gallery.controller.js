const express = require("express");

const path =require("path");

const {body ,validationResult} =require("express-validator");
const router = express.Router();

const Gallery = require("../models/gallery.model");

const upload = require("../middlewares/file-upload");



router.post("",upload.any("profile_pic") ,async (req,res) => {
    try{
    const filePaths=req.files.map((file) => file.path);
     const gallery = await Gallery.create({
         profile_pic:filePaths,
         user_id:req.body.user_id,
     })
     return res.send(gallery);
        
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 10;
        const gallery=await Gallery.find()
        .skip((page -1)*size)
        .limit(size)
        .populate({path:"user_id"})
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Gallery.find().countDocuments())/size
        );

        return res.send({gallery,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

module.exports=router;