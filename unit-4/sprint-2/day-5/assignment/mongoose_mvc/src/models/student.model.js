const mongoose = require("mongoose");

// step 2 :- create a schema
const studentSchema = new mongoose.Schema(
    {
      roll_id: { type: String, required: true },
      current_batch: { type: String, required: true },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      }
    },
    {
      versionKey: false, // removed __v
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  // step 3 :- create a model
  const Student = mongoose.model("student", studentSchema); // student => students

  module.exports=Student;