import './Login.css';
import {useNavigate} from 'react-router-dom';
import React from 'react'
import {useState} from 'react';

function Login() {
  const navigate=useNavigate();
  
  const [loguser,setLoguser]=useState(
    {
      em:"", pw:""
    }
  );
  let name2,value2;

const handleInp2=(e)=>{
  console.log(e);
name2=(e.target.name);
value2=(e.target.value);

setLoguser({...loguser ,[name2]:value2});
console.log(loguser);

}

const Postdata2=async(e)=>{
  e.preventDefault();
  const {em,pw}=loguser;
  console.log(loguser);
  const res=await fetch("http://localhost:4000/login",{
    method:"POST",
    headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify({em,pw})

});
console.log(res);
const data=await res.json();
console.log("DATA: ",data);
if(res.status===400||!data){
  window.alert("Invalid credentials or user doesn't exists..!");
  console.log("Invalid");
}
else{
  window.alert(" Login Successful");
  navigate('/home');
}
}


  return (
    <div className='lgn'>
        <div id="lg"  style={{ paddingTop: "12px" ,paddingLeft:"18px",fontSize:"larger"}}>  Login Now <hr /></div>

        <form method='POST'>

    <label htmlFor="eml"> Email: </label>
        <input onChange={handleInp2} className="cd-size cd" value={loguser.em} name="em" id="eml" type="email" placeholder="Enter Email" autoComplete='email'  required />
        <br />
        <label htmlFor="pwd">Password: </label>
        <input onChange={handleInp2} className="cd-size cd" value={loguser.pw} name="pw" id="pwd" type="password" style={{marginRight:"70px"}} placeholder="Enter Password"  autoComplete="current-password" required />
        <br />
        <br />
        <button onClick={Postdata2} className="cd-size" style={{ minWidth: "30vh", minHeight: "7vh", display:"block", margin:"1px 44%" }}>Submit</button>
        </form>
    </div>
  )
}

export default Login;
