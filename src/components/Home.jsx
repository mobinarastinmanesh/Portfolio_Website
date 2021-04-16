import React from 'react';
import Typed from "react-typed"
import Particles from "react-particles-js"
import style from './Home.module.css'

function Home() {
  return (
    <div id="home" className={style.home} >
      <div className={style.home_1}>
          <Particles className={style.particles}
              params={{
                "particles":{
                  
                  "number" : {
                    "value" :100
                  },
                  "size":{
                    "value" : 2 
                  }
                },
                "interactivity" : {
                  "events" : {
                    "onhover":{
                      "enable" : true ,
                      "mode" : "repulse"
                    }
                  }
                }
              }}
              height ="100vh"
            
          />
              <h1 className="hello" >Hello I'm Mobina</h1>
              <Typed
                  
                  strings ={['Front End Development' ,'Web Design ', 'Back End Development']}
                  typeSpeed={40}
                  backSpeed={60}
                  loop
                  style={{
                    color :"white",
                    fontSize : "25px",
                    position: "relative" ,
                    top : "32%"
                  }
                    
                  }
              />
    
      </div>
      </div>
  );
}

export default Home;
