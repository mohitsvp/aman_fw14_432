const EventEmitter = require("events");

const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

const {verificationMail,adminMail} = require("../utils");

const eventEmitter = new EventEmitter();

router.post("", async (req,res) => {
    try{
        const user=await User.create(req.body);

        eventEmitter.on("user Register",verificationMail);

        eventEmitter.emit("user Register",{
            from:"admin@abcsystem.com",
            to:user.email,
            user,
        });

        eventEmitter.on("admin1inform",adminMail);

        eventEmitter.emit("admin1inform",{
           from:"co@abcsystem.com",
           to:"admin1@gmail.com",
           user, 
        });

        eventEmitter.on("admin2inform",adminMail);

        eventEmitter.emit("admin2inform",{
           from:"co@abcsystem.com",
           to:"admin2@gmail.com",
           user, 
        });

        // eventEmitter.on("admin3inform",adminMail);

        // eventEmitter.emit("admin3inform",{
        //    from:"co@abcsystem.com",
        //    to:"admin3@gmail.com",
        //    user, 
        // });

        // eventEmitter.on("admin4inform",adminMail);

        // eventEmitter.emit("admin4inform",{
        //    from:"co@abcsystem.com",
        //    to:"admin4@gmail.com",
        //    user, 
        // });

        // eventEmitter.on("admin5inform",adminMail);

        // eventEmitter.emit("admin5inform",{
        //    from:"co@abcsystem.com",
        //    to:"admin5@gmail.com",
        //    user, 
        // });

        return res.send("Mail sent to user and admins both");
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