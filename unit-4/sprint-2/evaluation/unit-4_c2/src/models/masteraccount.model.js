const mongoose =require("mongoose");

const masterSchema = new mongoose.Schema(
    {
    balance:{type:Number,required:true},
    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const Master = mongoose.model("master",masterSchema);

module.exports=Master;