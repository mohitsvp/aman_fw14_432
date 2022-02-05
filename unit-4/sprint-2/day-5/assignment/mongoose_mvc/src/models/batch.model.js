const mongoose = require("mongoose");

// step 2 :- create a schema
const batchSchema = new mongoose.Schema(
    {
      batch_name: { type: String, required: true },
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
  const Batch = mongoose.model("batch", batchSchema); // batch => batchs

  module.exports=Batch;