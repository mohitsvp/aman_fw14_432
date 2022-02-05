const mongoose = require("mongoose");

// step 2 :- create a schema
const submissionSchema = new mongoose.Schema(
    {
      marks: { type: Number, required: true },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      evaluation_id:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"evaluation",
          required:true,
      }
    },
    {
      versionKey: false, // removed __v
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  // step 3 :- create a model
  const Submission = mongoose.model("submission", submissionSchema); // submission => submissions

  module.exports=Submission;