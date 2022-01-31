const express=require("express");

const app=express();


app.get("/books",allBooks,(req,res) => {
    return res.send("All books");
})

function allBooks(){
    return (req,res,next) => {
        console.log("Fetching all books");
        next();
    }
}

app.get("/book/GameOfThrones",book("GameOfThrones"),(req,res) => {
    return res.send(`bookName: ${req.name}`);
})

app.get("/book/HarryPotter",book("HarryPotter"),(req,res) => {
    return res.send(`bookName: ${req.name}`);
})

function book(name){
   return (req,res,next) => {
       if(name == 'GameOfThrones'){
           req.name='GameOfThrones';
       }
       if(name == 'HarryPotter'){
           req.name='HarryPotter';
       }
       next();
   }
}

app.listen(1234,() => {
    console.log("listening on port 1234");
})