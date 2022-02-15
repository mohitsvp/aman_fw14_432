require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

const connect = require("./confige/db");
const userController = require("./controllers/user.controller");

function updateRequestMethod(req,res,next){
    if(req.body.method){
        req.method = req.body.method;
        return next();
    }
    return next();
}

app.use(updateRequestMethod);

app.use("/users",userController);

app.set("view engine","ejs");

app.use(express.static("public"));

 //port = process.env.PORT || 3010;

app.listen(3010, async () => {
    await connect();

    console.log(`listening on port 3010`);
});