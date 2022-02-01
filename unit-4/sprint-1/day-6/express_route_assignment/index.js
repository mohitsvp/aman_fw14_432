
const express = require("express");

const books = require("./books.json");

const app=express();


  app.get("", (req, res) => {
    return res.send("Hello");
  });
  
  app.get("/books", (req, res) => {
    return res.send({ books: books });
  });
  
  app.listen(3000, function () {
    console.log("listening on port 3000");
  });