require("dotenv").config();
const passport = require("passport");
const User = require("../models/user.model");
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const {v4:uuidv4 }= require("uuid");

//const User = require("../models/user.model");

passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3009/auth/google/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    //  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //     console.log("accessToken, refreshToken, profile",
    //     accessToken,refreshToken,profile);
    //   return done(null,"user");
    // });
    try{

    let user = await User.findOne({email:profile?.email}).lean().exec();

    if(!user){
        user = await User.create({
            email:profile?.email,
            password:uuidv4(),
            role:["customer"],
        });
    }
    return done(null,user);
    }catch(err){
        console.log("err:",err.message);
    }
 }
));

module.exports = passport;