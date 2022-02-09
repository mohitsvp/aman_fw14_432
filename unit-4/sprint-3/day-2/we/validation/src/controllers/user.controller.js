const express = require("express");

const {body ,validationResult} =require("express-validator");
const router = express.Router();

const User = require("../models/user.model");

router.post("", 
body("id").isNumeric().withMessage("Id is not a number").bail()
.custom(async(value) => {
    const user = await User.findOne({id:value});
    if(user){
        throw new Error("Id already exists");
    }
    return true;
}),
body("first_name").isString().isLength({min:3,max:20}),
body("last_name").isString().isLength({min:3,max:20}),
body("email").isEmail()
.custom(async(value) => {
    const user = await User.findOne({email:value});
    if(user){
        throw new Error("Email already exists");
    }
    return true;
}),
body("password").isStrongPassword().withMessage("Please enter strong Password"),
body("age").isNumeric(),
body("ip_address").isIP(),
body("dob").isDate()
,async (req,res) => {
    try{

        const errors = validationResult(req);

        if(!errors.isEmpty()){

            let newErrors = errors.array().map((err) => {
                return {key : err.param , message : err.msg}
            })
            return res.status(400).send({errors: newErrors});
            // return res.status(400).send({errors:errors.array()});
        }else{
            return res.status(200).send("no errors");
        }
        
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