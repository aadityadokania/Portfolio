import React from 'react'
import './MainMenu.css'
import { useState } from 'react'
import MyProjects from '../Myprojects/MyProjects';
import Resume from '../Resume/Resume';

function MainMenu() {

  const [showPortfolio, setshowPortfolio] = useState(true);

const handleClick = (value)=>{
if(value == "p"){
  setshowPortfolio(true);
}else{
  setshowPortfolio(false);
}
}
  

  return (
    <>
    <div className='MainMenu'>
        <div className="MainMenu__buttons">
            <button onClick={()=>handleClick('p')}>Portfolio</button>
            <button onClick={()=>handleClick('r')}>Resume</button>

        </div>

    </div>

    {showPortfolio ? <MyProjects/> : <Resume/>}

    </>
  )
}

export default MainMenu