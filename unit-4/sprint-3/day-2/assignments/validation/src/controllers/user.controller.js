const express = require("express");

const {body ,validationResult} =require("express-validator");
const router = express.Router();

const User = require("../models/user.model");

router.post("", 
body("first_name").isString().isLength({min:3,max:20}).withMessage("Please enter more than 3 char"),
body("last_name").isString().isLength({min:3,max:20}).withMessage("Please enter more than 3 char"),
body("email").isEmail()
.custom(async(value) => {
    const user = await User.findOne({email:value});
    if(user){
        throw new Error("Email already exists");
    }
    return true;
}),
body("pincode").isLength({min:6,max:6}).withMessage("Please enter valid 6 digit pincode"),
body("age").isNumeric().withMessage("Please enter numeric value")
.bail()
.custom(async(value) => {
    if(value>=1&&value<=100){
        return true;
    }else{
        throw new Error("Please enter age between 1 to 100"); 
    }
}),
body("gender").custom(async(value) => {
    if(value=="Male"||value=="Female"||value=="Others"){
        return true;
    }else{
        throw new Error("Please enter Male or Female or Others");
    }
})
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