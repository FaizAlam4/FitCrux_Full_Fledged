import './Exercise.css';
import React, { useState, useEffect } from 'react'
import { exeroptions, fetchData } from './utils/fetchData';
import Comps from './Comps';
import { useNavigate } from 'react-router-dom'


function createComp(nfinal) {
  return <div className='cds'><Comps key={nfinal.id} name={nfinal.name} imsrc={nfinal.gifUrl} /></div>
}


function Exercise() {

  const navigate = useNavigate();

  useEffect(() => {
    myfuncAbout();
  }, [])


  const myfuncAbout = async () => {
    try {
      const res = await fetch('/exercise', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      });
      const data = await res.json();
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    }
    catch (err) {
      console.log(err);
      navigate('/login');

    }
  }


  const [search, setSearch] = useState('');
  const [ans, setAns] = useState(true);
  const [nfinal, setNfinal] = useState([]);

  const comment = "**NOT FOUND**";
  const seeSearch = async () => {
    if (search) {
      const exerdata = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exeroptions);
      const searchedExercises = exerdata.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
      );

      console.log(searchedExercises);
      // const nf=searchedExercises.map((e)=>{return e.name});
      // setNfinal(nf);
      setNfinal(searchedExercises);
      if (searchedExercises.length === 0)
        setAns(false);
    }
  }


  return (
    <div id='exer'>
      <br />

      <input id='inp' type="text" value={search} placeholder='Categories' onChange={(e) => { setSearch(e.target.value.toLowerCase()) }} />
      <br /> <br />
      <button className='btn btn-danger' onClick={seeSearch}>submit</button>
      <div className='conts'>
        {(ans) ? nfinal.map(createComp) : comment}
      </div>
    </div>
  )
}

export default Exercise;


