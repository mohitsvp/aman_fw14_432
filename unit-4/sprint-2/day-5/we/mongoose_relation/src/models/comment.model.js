const mongoose = require("mongoose");


// ------------------ COMMENT MODEL ----------------------------------------------------
const commentSchema = new mongoose.Schema(
    {
      content: { type: String, required: true },
      post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true,
      },
    },
    {
      versionKey: false, // removed __v
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  const Comment = mongoose.model("comment", commentSchema); // comment => comments

  module.exports=Comment;