const jwt=require('jsonwebtoken');
const User=require("../models/userScheme.js")
const bp=require('body-parser')
const express=require('express')
const app=express()
app.use(express.json())


const authenticate=async(req,res,next)=>{
try{
//    const token=req.headers.cookie.split('=')[1];
const token=req.cookies.jwtoken;
console.log("Token found:",token)
const verifyToken=jwt.verify(token,process.env.SECRET_KEY);
console.log("Dekh->",verifyToken);
const rootUser=await User.findOne( {_id:verifyToken._id,"tokens.token":token});
console.log("Dekh2->",rootUser);
if(!rootUser){
    throw new Error("User not found")
}
req.token=token;
req.rootUser=rootUser;  
req.userID=rootUser._id;
console.log("Yup");
next();
}
catch(err){
console.log(err);
res.status(401).send("Unauthorised!")
}
next();
}

module.exports=authenticate;