import React,{useState , useEffect} from 'react';
import styles from './Navbar.module.css';
import linkedin from "../images/iLogo_LinkedIn.png";
import github from "../images/Github.png";
import telegram from "../images/Airplane.png";
import gmail from "../images/Gmail1.png";
import resume from '../images/resume6.png'
import cv from '../file/cv.pdf'
import gitlab from '../images/gitlab1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
    const [isExpanded, setExpanded] = useState(false);
    const [scrolled,setScrolled]=useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 140 ){
        setScrolled(true);
        }
        else{
        setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })
   
  return (
    <div>
 
    <div className={`${styles.container} ${scrolled ? "fixed-top" : ""} `}>
        <nav className={styles.navigation}>
            <button className={styles.open} onClick={ () => setExpanded((prevExpanded) => !prevExpanded)}>
                {isExpanded ? <i className="fa fa-times" ></i> : <i className="fas fa-bars"></i>}
            </button>
    
            <ul className={styles.navlist_top}>
                <li className={styles.navitem}><a href="#home" >Home</a></li>
                <li className={styles.navitem}><a href="#about" >About</a></li>
                <li className={styles.navitem}><a href="#skill" >Skills</a></li>
                <li className={styles.navitem}><a href="#contact" >Contact me</a></li>
            </ul>
        </nav>
        
        <div className={styles.socialNetwork}>
            <ul className={styles.socialList}>
                <li className={styles.socialItem}>
                    <a href="https://www.linkedin.com/feed/" ><img src={linkedin} /></a>
                </li>
                <li className={styles.socialItem}>
                    <a href="https://github.com/" ><img src={github} /></a>
                </li>
                <li className={styles.socialItem}>
                    <a href="https://t.me/rastin_manesh" ><img src={telegram} /></a>
                </li>
                <li className={styles.socialItem}>
                    <a href="mailto:mobinarastinmanesh78@gmail.com" ><img src={gmail} /></a>
                </li>
                <li className={styles.socialItem}>
                    <a href={cv} ><img src={resume} /></a>
                </li>
            </ul>
        </div>
    
    
     </div>
    
     <div className={styles.navlist_left} style={{display : isExpanded ? "inline" : "none"} }>
            <ul>
                <li className={styles.navitem}><a href="#home" >Home</a></li>
                <li className={styles.navitem}><a href="#about" >About</a></li>
                <li className={styles.navitem}><a href="#skill" >Skills</a></li>
                <li className={styles.navitem}><a href="#contact" >Contact me</a></li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
