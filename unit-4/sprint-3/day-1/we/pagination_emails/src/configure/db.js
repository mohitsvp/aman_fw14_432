const mongoose=require("mongoose");

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://aman_638:aman_638@cluster0.txhrb.mongodb.net/pagination?retryWrites=true&w=majority"
    )
}

module.exports=connect;