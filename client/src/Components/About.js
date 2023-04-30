import React from 'react';
import './About.css';
import Abtlogo from '../assets/abtpic12.png'

function About(){

return <div className='ac' id="abt"> 
 <div id='ac1'  style={{border:"none"}}> <img id='abtimg' src={Abtlogo} alt="" /></div>  
<div className='ac' id='ac2'>
    <p>Say goodbye to excuses
and hello to positive uses
of your time and energy as
our website's the remedy for that you just have to
join our fitness website today to
find your motivation and stay
with workouts, tips, and guidance too
your goals are achievable, it's true.</p>
</div>
<div className='ac' id='ac3'>
    <ul>Why FitCrux ?
        <hr />
    <li>Free to use</li>
    <li>Home Workout plan</li>
    <li>Measure progress</li>
    <li>Schedule tasks</li>
    <li>Diet planner</li>
    </ul>
</div>
</div> 
}

export default About;