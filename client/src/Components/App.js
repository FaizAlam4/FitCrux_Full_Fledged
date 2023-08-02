import './App.css';
import Heading from './Heading';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Register from './Register';
import Exercise from './Exercise';
import Login from './Login';
import Logout from './Logout';

import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
   
    <div className="App">
      <Heading />
      
      <Routes>   
          <Route path="/about" element={<About />} />
          <Route path="/FitCrux-The-React-App" element={<Home/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/exercise" element={<Exercise/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/logout" element={<Logout/>} />
         
        </Routes>
   
      <Footer />
    </div>
    
  );
}

export default App;
