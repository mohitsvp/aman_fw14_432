const mongoose = require("mongoose");

// step 2 :- create a schema
const userSchema = new mongoose.Schema(
    {
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      gender: { type: String, required: false, default: "Male" },
      dob: { type: String, required: true },
      type: { type: String, required: true },
    },
    {
      versionKey: false, // removed __v
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  // step 3 :- create a model
  const User = mongoose.model("user", userSchema); // user => users

  module.exports=User;