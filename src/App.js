import React,{useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contactme from './components/ContactMe';
import './App.css';

function App() {
  
  return (
    <div  className="App">
    <Navbar />  
    <Home />
    <About />
    <Skills />
    <Contactme  />
    <div style={{
      height :"70px" ,
      backgroundColor : "darkgray"
    }}>
    </div>
  </div>
  );
}

export default App;
