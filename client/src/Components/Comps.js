import React from 'react';
import './Comps.css'
function Comps(props) {
   
  return (
    <div>
        <div>  <img src={props.imsrc} alt="" /></div> 
        <div>  {props.name}</div>
     
    </div>
  )
}

export default Comps;
