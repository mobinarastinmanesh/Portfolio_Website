import React from 'react';
import style from './Skills.module.css' ;

function Progress({skill , persent }) {
  return (
      <div className={style.progressbar_container}>
        <span className={style.skill_name}>{skill}</span>  
        <div className={style.progress_bar_border} >
            <div className={style.progress_bar_content} style={{width:persent}}></div>
        </div> 
      </div>
    
  );
}

export default Progress;
