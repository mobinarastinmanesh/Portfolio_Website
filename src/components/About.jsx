import React,{useEffect} from 'react';
import style from './About.module.css';
import me from "../images/me.png";
import Typed from "react-typed"
import AOS from 'aos';
import 'aos/dist/aos.css';
function About() {
  useEffect(()=>{
    AOS.init({
      duration: 2000 ,
      delay: 100 
    })
},[])
  return (
    <div className={style.about_container} id="about" >
       <div  data-aos="zoom-out-left" className={style.image_section , style.section }>
          <div className={style.image}>
            <img src= {me} width="300px" height="450px"/>
          </div>
       </div>

       <div data-aos="zoom-out-left" className={style.text_section , style.section }>
         <h1 className={style.title}>About me &#128522;</h1>
             <Typed
             data-aos="ease-out"
                  strings ={['Hello Iam Mobina Rastinmanesh <br/> I was born in 1999 and i study software engineering at university of science and calture , tehran ,Iran.<br/>I have the ability to work as a  front-end web developer and web designer. <br/>I like building new stuff and work with other people – nothing really interesting is ever built alone!<br/>']}
                  typeSpeed={40}
                  
                  style={{
                    color :"black",
                    fontSize : "25px",
                    fontWeight :"bold" ,
                    position: "relative" ,
                    top : "15%"
                  }  
                  }
              />
      </div>
    </div>
  );
}

export default About;
