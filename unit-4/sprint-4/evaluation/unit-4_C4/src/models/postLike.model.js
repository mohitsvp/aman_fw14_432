const mongoose = require("mongoose");

const postlikeSchema = new mongoose.Schema(
    {
        post_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
            required: true,
          },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
          }
    },{
        versionKey:false,
        timestamps:true
    }
);

const Postlike = mongoose.model("postlike",postlikeSchema);
module.exports=Postlike;