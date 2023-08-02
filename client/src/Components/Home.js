import './Home.css';
import exercise from '../assets/exer.jpg';
import { useNavigate,Link } from 'react-router-dom'
import { useEffect } from 'react'
import diet from '../assets/diet.jpg';
import life from '../assets/lifestyle.jpg';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { faShieldVirus } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const element = faDumbbell;
const ex = faPersonWalking;
const ex1 = faBowlFood;
const ex2 = faShieldVirus;


function Card(props) {
  return <div className="card" style={{ width: "18rem" }}>
    <img src={props.site} className="card-img-top" alt="..." />
    <div className="card-body">
      <FontAwesomeIcon icon={props.ico} /> <h5 id="fg" className="card-title">{props.name}</h5>
      <p className="card-text">{props.content}</p>
      <Link to="/exercise" className="btn btn-danger">Show me</Link>
    </div>
  </div>
}

function Home() {

  const navigate = useNavigate();

  useEffect(() => {

    myfuncAbout();
  }, []);


  const myfuncAbout = async () => {
    try {
      const res = await fetch('/home', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      });
      const data = await res.json();
      console.log(data)

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }

    }
    catch (err) {
      console.log(err);
      navigate('/login');

    }
  }


  var str1 = "Home or gym, don't compromise with health";
  var str2 = "Diet for each individual just on a click";
  var str3 = "Healthy lifestyle for happy life, what's yours?";
  var pat1 = exercise;
  var pat2 = diet;
  var pat3 = life;

  return (

  <div className='fl'>
   
    <h1 id='fc' style={{ fontWeight: "bold", width: "50%", }}><FontAwesomeIcon id="fi" icon={element} /> &nbsp; <span><div style={{ display: "inline", backgroundColor: "#dc3545", borderRadius: "5rem", padding: "5px" }}>Fit</div>Crux</span> </h1>
    <div className='cf'> <Card name="Exercise" content={str1} site={pat1} ico={ex} /></div>
    <div className='cf'> <Card name="Diet" content={str2} site={pat2} ico={ex1} /></div>
    <div className='cf'> <Card name="Lifestyle" content={str3} site={pat3} ico={ex2} /></div>

  </div>
  )

}

export default Home;