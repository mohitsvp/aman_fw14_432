const mongoose =require("mongoose");

const fixedSchema = new mongoose.Schema(
    {
    account_number:{type:Number,required:true,unique:true},
    balance:{type:Number,required:true},
    interest_rate:{type:Number,required:true},
    startDate:{type:String,required:true},
    maturityDate:{type:String,required:true},
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const Fixed = mongoose.model("fixed",fixedSchema);

module.exports=Fixed;