const mongoose = require("mongoose");

// step 2 :- create a schema
const evaluationSchema = new mongoose.Schema(
    {
      date_of_evaluation: { type: String, required: true },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      batch_id:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"batch",
          required:true,
      }
    },
    {
      versionKey: false, // removed __v
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  // step 3 :- create a model
  const Evaluation = mongoose.model("evaluation", evaluationSchema); // evaluation => evaluations

  module.exports=Evaluation;