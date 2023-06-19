const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
// router.use(bodyParser.urlencoded({extended:true}));
require('../db/conn');
router.use(express.json());
const User=require('../models/userScheme.js')


router.get('/',(req,res)=>{
res.send("hello from server")
});

router.post('/register', (req,res)=>{
    const {name,email,password,gender}=req.body;
    // console.log(req.body);

  
    if(!name||!email||!password||!gender){
        return res.status(422).json({error:"Please fill the form completely"})
    }
    //  res.json({message:req.body})  creates problem as we cann't send multiple responses
     console.log(name);
    

     User.findOne({email:email}).then((exist)=>{
         if(exist){
 return res.status(422).json({error:"Email already exists!"});
        }
         const us=new User({ name:name,email:email,password:password,gender:gender })
        //  const user=new User(req.body)
      
console.log("My entered user is:",us);

        us.save().then(()=>{
           return res.status(201).json({message:"User registered successfully!"});
        }).catch(()=> res.status(500).json({error:"Failed to register !"}));
    }).catch(err=>{console.log(err);})


})


 router.post('/login',async(req,res)=>{
 try{
    let token;
 const {email,password}=req.body;
 if(!email||!password){
     return res.status(400).json({error:"Invalid"})
 }
 const userLogin=await User.findOne({email:email})
 if(userLogin){
     const isMatch=await bcrypt.compare(password,userLogin.password);

     if(isMatch ){
         token= await userLogin.generateAuthToken();
         console.log(token);

            res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+250000000),
            httpOnly:true})
            
    return res.json({message:"User signin successfully!"}) 
     }
     else{
       return  res.status(400).json({error:"Invalid Credentials"})
     }
 }
 else{
     return res.status(400).json({error:"User might exist already!"})
 
 }}
 catch(err){
 console.log(err);
 }
 })

module.exports=router;