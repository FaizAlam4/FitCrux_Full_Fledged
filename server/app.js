const express=require('express')
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
const path=require('path')
// const User=require('./models/userScheme')
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());

dotenv.config({path:'./config.env'})

const port=process.env.PORT||4000;

require('./db/conn.js')
const corsOptions = {
    origin:[ 'http://localhost:3000', "https://courageous-elf-95e02a.netlify.app/"]
  };
app.use(cors(corsOptions));
//linked router files
app.use(require('./router/auth'));

app.use(express.static(path.join(__dirname,"../client/build")));
app.get("*",(_,res)=>{
res.sendFile(
  path.join(__dirname,"../client/build/index.html"),(err)=>{
res.status(500).send(err);
  }
)
})





app.listen(port,()=>{console.log(`Listening to ${port}`)})