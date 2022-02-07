const mongoose =require("mongoose");

const masterSchema = new mongoose.Schema(
    {
    balance:{type:Number,required:true},
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

const Master = mongoose.model("master",masterSchema);

module.exports=Master;