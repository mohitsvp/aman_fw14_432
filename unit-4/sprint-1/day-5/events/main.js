const EventEmitter = require('events')

const verification=require("./verification");
const welcome=require("./welcome");
const admin=require("./admin");

const eventEmitter = new EventEmitter()

function userRegisterOnWebsite(){
    
    eventEmitter.on("User Register",verification)

    eventEmitter.on("User Register",welcome)

    eventEmitter.on("User Register",admin)

    eventEmitter.emit("User Register",{name:"Aman Raj"});
}
userRegisterOnWebsite();