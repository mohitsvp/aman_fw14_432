const mongoose =require("mongoose");

const savingsSchema = new mongoose.Schema(
    {
    account_number:{type:Number,required:true,unique:true},
    balance:{type:Number,required:true},
    interest_rate:{type:Number,required:true},
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    branch_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "branch",
        required: true,
    }
    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const Savings = mongoose.model("savings",savingsSchema);

module.exports=Savings;