const  express=require("express");

const app=express();

app.get("/user",logger1("admin"),(req,res) => {
    return res.send(`${req.role}`);
})

function logger1(role){
   return (req,res,next) => {
       if(role == 'admin'){
           req.role='Admin';
       }else{
           req.role="user";
       }
       next();
   }
}

app.listen(2345,function(){
    console.log("listening on port 2345");
})