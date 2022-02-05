const mongoose=require("mongoose");

// step 1 :- connect to mongodb
const connect = () => {
    return mongoose.connect(
      // mongodb://127.0.0.1:27017/web14
      "mongodb+srv://aman_638:aman_638@cluster0.txhrb.mongodb.net/masai?retryWrites=true&w=majority"
    );
  };

  module.exports=connect;