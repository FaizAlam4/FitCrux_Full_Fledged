import React from "react";
import './Register.css';
import {useNavigate} from 'react-router-dom';
// import Login from "./Login";
// import { Link } from 'react-router-dom';
import { useState } from "react";


function Register(){
const history=useNavigate();
const [user,setUser]=useState(
  {
    nm:"",em:"", pw:"", gender:""
  }
);
let name1,value1;

const handleInp=(e)=>{
  console.log(e);
name1=(e.target.name);
value1=(e.target.value);

setUser({...user ,[name1]:value1});
console.log(user);

}

const Postdata=async(e)=>{
  e.preventDefault();
  const {name,email,password,gender}=user;
  const res=await fetch("/register",{method:"POST",headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify({name,email,password,gender})

});
const data=await res.json();
if(data.status===422||!data){
  window.alert("Invalid Registration");
  console.log("Invalid");
}
else{
  window.alert(" Registration Successful");
  history.push('/login');
}
}

    return <div className="contss">
      <span id="ng"> Already Registered? <small style={{backgroundColor:"red"}}>Go to login !! </small></span>

      <form method="POST"> <fieldset> <legend id="lg" style={{ paddingTop: "12px" }}>  Join Our Community</legend> <hr />

        <label htmlFor="nm"> Name: </label>
        <input onChange={handleInp} className="cd-size cd" value={user.nm} id="nm" name="nm" type="text" placeholder="Enter Name" required />
        <br />
        <label htmlFor="em">Email: </label>
        <input onChange={handleInp} className="cd-size cd" value={user.em} id="em"  name="em" type="email" placeholder="Enter Email" required />
        <br />
        <label htmlFor="pw"  value={user.pw} style={{ marginRight: "0px" }}> Password: </label>
        <input onChange={handleInp} className="cd-size cd" style={{ marginRight: "92px" }} id="pw" name="pw" type="password" required placeholder="Enter Password" />
        <br />
        <div className="cd-size">
          <label htmlFor="ml">Male:</label>
          <input onChange={handleInp} type="radio" value="male" id="ml" name="gender" /> &emsp;
          <label htmlFor="fml">Female:</label>
          <input onChange={handleInp} type="radio" value="female" id="fml" name="gender" /> &emsp;
          <label htmlFor="oth">Other:</label>
          <input onChange={handleInp} type="radio" value="other" name="gender" id="oth" />
        </div>
        <br />
        <button className="cd-size" style={{ minWidth: "30vh", minHeight: "7vh" }} onSubmit={Postdata}>Let's Go</button>
      </fieldset></form>
    </div>
}


 export default Register;