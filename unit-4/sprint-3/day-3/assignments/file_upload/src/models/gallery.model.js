const mongoose =require("mongoose");

const gallerySchema = new mongoose.Schema(
    {
    profile_pic:[{type:String}],
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const Gallery = mongoose.model("gallery",gallerySchema);

module.exports=Gallery;