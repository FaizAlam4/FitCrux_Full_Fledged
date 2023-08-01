const express=require('express')
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
// const User=require('./models/userScheme')
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());

dotenv.config({path:'./config.env'})

require('./db/conn.js')
const corsOptions = {
    origin: 'http://localhost:3000', 
  };
app.use(cors(corsOptions));
//linked router files
app.use(require('./router/auth'));
const port=process.env.PORT;





app.listen(port,()=>{console.log(`Listening to ${port}`)})