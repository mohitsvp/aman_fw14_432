const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

const {body} = require("express-validator");

router.post("",
body("first_name").isString().isLength({min:3,max:20}).withMessage("Please enter more than 3 char"),
body("last_name").isString().isLength({min:3,max:20}).withMessage("Please enter more than 3 char"),
body("age").isNumeric().withMessage("Please enter numeric value"),
body("email").isEmail()
,async(req,res) => {
    try{
        const user = await User.create(req.body);
        return res.send(user);
    }catch(err){
        return res.send(err.message);
    }
})

router.get("",async(req,res) => {
    try{
        const user = await User.find().lean().exec();
        return res.send(user);
    }catch(err){
        return res.send(err.message);
    }
})

module.exports=router;