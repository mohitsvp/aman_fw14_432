// import mongoose
const mongoose = require("mongoose");

// create connect function to connect to database
const connect = () => {
  return mongoose.connect("mongodb+srv://aman_638:aman_638@cluster0.txhrb.mongodb.net/redis?retryWrites=true&w=majority");
};

//exporting the connect function in index.js
module.exports = connect;
