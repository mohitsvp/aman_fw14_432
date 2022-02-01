
const express = require("express");

const app = express();

// HTTP VERBS => get ,post, put, patch, delete

app.get("",(req,res) => {
    return res.send("hello");
})

app.get("/users",(req,res) => {
    return res.send("All Users");
})

app.listen(2345, function(){
    console.log("listening on port 2345");
})