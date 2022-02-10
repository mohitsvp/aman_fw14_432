const express=require("express");

const connect = require("./confige/db");

const userController=require("./controllers/user.controller");


const app = express();

app.use(express.json());

app.use("/users",userController);


app.listen(3008, async () => {
    try{
        await connect();
        console.log("listening on port 3008");
    }catch(err){
      console.log(err.message);
    }
})