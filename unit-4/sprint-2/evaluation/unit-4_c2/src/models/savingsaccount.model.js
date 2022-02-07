const mongoose =require("mongoose");

const savingsSchema = new mongoose.Schema(
    {
    account_number:{type:Number,required:true,unique:true},
    balance:{type:Number,required:true},
    interest_rate:{type:Number,required:true},
    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const Savings = mongoose.model("savings",savingsSchema);

module.exports=Savings;