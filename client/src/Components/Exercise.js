import './Exercise.css';
import React, {  useState } from 'react'
import {exeroptions, fetchData } from './utils/fetchData';
import Comps from './Comps';



function createComp(nfinal){
return <div className='cds'><Comps key={nfinal.id} name={nfinal.name} imsrc={nfinal.gifUrl} /></div>
}


function Exercise() {
    const [search,setSearch]=useState('');
    const [ans,setAns]=useState(true);
    const [nfinal,setNfinal]=useState([]);

    const comment="**NOT FOUND**";
   const seeSearch= async()=>{
    if(search){
        const exerdata= await fetchData('https://exercisedb.p.rapidapi.com/exercises',exeroptions);
        const searchedExercises=exerdata.filter(
            (exercise)=>exercise.name.toLowerCase().includes(search)
            );

            console.log(searchedExercises);
            // const nf=searchedExercises.map((e)=>{return e.name});
            // setNfinal(nf);
setNfinal(searchedExercises);
if(searchedExercises.length===0)
setAns(false);
    }
   }


  return (
    <div id='exer'>
        <br />

     <input id='inp' type="text" value={search} placeholder='Categories' onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}/>
     <br /> <br />
     <button className='btn btn-danger' onClick={seeSearch}>submit</button>
     <div className='conts'>
     { (ans)? nfinal.map(createComp):comment}
     </div>
    </div>
  )
}

export default Exercise;


