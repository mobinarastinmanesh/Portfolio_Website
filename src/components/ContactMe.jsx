import React,{useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import style from './ContactMe.module.css';
import image from '../images/msg.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contactme() {

 
  useEffect(()=>{
    AOS.init({
      duration: 2000
    })
},[])

  return (
    <div  className={style.contactContaioner}  id="contact">
      <div data-aos="fade-right" className={style.form_section , style.section} >
        <h1 >Contact me &#127800;</h1>
        <form action="/contact" name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <TextField name="name" label="Full name" />
            <TextField name="email" label="Email" />
            <TextField 
                name="massage" 
                label="Massage"
                multiline
                rows={10}
                
             />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>

        </form>
      </div>
      <div data-aos="fade-left" className={style.pic_section , style.section}>
        <img src={image}  />
        
      </div>
    </div>
  );
}

export default Contactme;
