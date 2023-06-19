const express=require('express')
const app=express()
const dotenv=require('dotenv')
// const User=require('./models/userScheme')
app.use(express.json());

dotenv.config({path:'./config.env'})

require('./db/conn.js')

//linked router files
app.use(require('./router/auth'));

const port=process.env.PORT;





// app.get('/about',(req,res)=>{
// res.send("hi about");
// })
// app.get('/exercise',(req,res)=>{
// res.send("hi exerc");
// })
// app.get('/register',(req,res)=>{
// res.send("hi register");
// })


app.listen(port,()=>{console.log(`Listening to ${port}`)})