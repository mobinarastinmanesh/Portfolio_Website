import React,{useEffect} from 'react';
import style from './Skills.module.css' ;
import gif from '../images/skills.gif';
import Progress from './ProgressBar.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
useEffect(()=>{
    AOS.init({
      duration: 2000 ,
      mirror: true, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom'
    })
},[])
  return (
    <div className={style.skill_container} id="skill">
      
      <div className={style.skill_section , style.section} >
        <h1 style={{fontWeight:"bold"}}> My Skills &#128142;</h1>
        <div className={style.skills}  data-aos="flip-left">
          <Progress skill="   HTML   " persent="90%" />
          <Progress skill="   CSS    " persent="86%" />
          <Progress skill="   SASS   " persent="84%"/>
          <Progress skill="Bootstrap " persent="84%" />
          <Progress skill="JavaScript" persent="85%" />
          <Progress skill="Reactjs   " persent="85%" />
          <Progress skill="jQuery    " persent="80%" />
          <Progress skill="java SE   " persent="90%" />
          <Progress skill="     C    " persent="60%" />
          <Progress skill="    C++   " persent="50%" />
          <Progress skill="    Git   " persent="70%" />
          <Progress skill="    SQL   " persent="60%" />
          
        </div>
      </div>

      <div className={style.image_section , style.section} >
        <div className={style.image} >
          <img src={gif} id="skillimg" width="450px"/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
