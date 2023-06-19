const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose=require('mongoose');

const uri =process.env.DATABASE;


mongoose.connect(
   uri, 
).then(()=>{console.log("connection established!")}).catch((err)=>{console.log("No connection")})
// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });
  
//   async function run() {
//     try {
     
//       await client.connect();
     
//       await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
      
//       await client.close();
//     }
//   }
//   run().catch(console.dir);