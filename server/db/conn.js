const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose=require('mongoose');

const uri =process.env.DATABASE;


mongoose.connect(
   uri, 
).then(()=>{console.log("connection established!")}).catch((err)=>{console.log("No connection")})
