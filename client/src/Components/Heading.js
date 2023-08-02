import './Heading.css'
import { Link } from 'react-router-dom'
// import { useState } from 'react';


function Heading() {

   

  
    return <header className="head">
        <div className="container">
            <div className="cont"> <Link to="/FitCrux-The-React-App">Home</Link> </div>
            <div className="cont"> <Link to="/about">About</Link> </div>
            <div className="cont"> <Link to="/exercise">Exercises</Link> </div>
            <div className="cont" > <Link to="/register" >Register</Link></div>
            <div className="cont" > <Link to="/login" >Login</Link></div>
            <div className="cont" > <Link to="/logout" >Logout</Link></div>
        </div>
    </header>
}

export default Heading;