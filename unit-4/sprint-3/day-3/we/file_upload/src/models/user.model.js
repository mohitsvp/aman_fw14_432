const mongoose =require("mongoose");

const userSchema = new mongoose.Schema(
    {
    name:{type:String,required:true},
    dob:{type:String,required:true},
    profile_pic:[{type:String}],
    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const User = mongoose.model("user",userSchema);

module.exports=User;