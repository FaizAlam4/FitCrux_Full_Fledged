import './Login.css';

import React from 'react'

function Login() {
  return (
    <div className='lgn'>
        <div id="lg"  style={{ paddingTop: "12px" ,paddingLeft:"18px",fontSize:"larger"}}>  Login Now <hr /></div>
    <label htmlFor="nml"> Email: </label>
        <input className="cd-size cd" id="eml" type="email" placeholder="Enter Email" required />
        <br />
        <label htmlFor="eml">Password: </label>
        <input className="cd-size cd" id="pwd" type="password" style={{marginRight:"70px"}} placeholder="Enter Password" required />
        <br />
        <br />
        <button className="cd-size" style={{ minWidth: "30vh", minHeight: "7vh", display:"block", margin:"1px 44%" }}>Submit</button>
    </div>
  )
}

export default Login;
