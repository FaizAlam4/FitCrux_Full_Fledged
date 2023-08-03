const express=require('express')
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
const path=require('path')
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());

dotenv.config({path:'./config.env'})

const port=process.env.PORT||4000;


// const corsOptions = {
//     origin:[ 'http://localhost:3000/', "https://faiz-fitcrux-frontend.onrender.com"]
//   };

app.use(cors());

require('./db/conn.js');


//serves frontend

app.use(express.static(path.join(__dirname,'./public')));

app.use(require('./router/auth'));

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,'./public./index.html'))
  
})


app.listen(port,()=>{console.log(`Listening to ${port}`)});