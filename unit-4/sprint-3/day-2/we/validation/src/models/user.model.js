const mongoose =require("mongoose");

const userSchema = new mongoose.Schema(
    {
    id:{type:Number,required:true},
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    gender:{type:String,required:false,default:"Female"},
    age:{type:Number,required:true},
    ip_address:{type:String,required:false},
    dob:{type:String,required:true}
    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const User = mongoose.model("user",userSchema);

module.exports=User;