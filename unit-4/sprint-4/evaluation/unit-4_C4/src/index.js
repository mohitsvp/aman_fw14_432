const express = require("express");

const connect = require("./confige/db");

const userController = require("./controllers/user.controller");

const app = express();
app.use(express.json());

app.use("/users",userController);


app.listen(3011,async function (){
    try{
        await connect();
        console.log("listening on port 3011");
    }catch(err){
        console.log(err.message);
    }
});