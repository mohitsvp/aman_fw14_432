const mongoose = require("mongoose");


// ------------------ TAG MODEL ----------------------------------------------------
const tagSchema = new mongoose.Schema(
    {
      name: { type:String,required:true, unique: true },
    },
    {
      versionKey: false, // removed __v
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  const Tag = mongoose.model("tag", tagSchema); // tag => tags

  module.exports=Tag;