import React from "react";
import "./Header.css";
import "./Header.small.css";

import { BsInstagram ,BsTwitter,BsLinkedin} from "react-icons/bs";


import profile from '../../assets/profile_pic.jfif'
import reactlogo from '../../assets/logos/react-logo.svg'
import firebaselogo from '../../assets/logos/firebase-logo.svg'
import javascriptlogo from '../../assets/logos/javascript-logo.svg'
import tailwindlogo from '../../assets/logos/tailwind-logo.svg'
import csslogo from '../../assets/logos/css3-logo.svg'
import gitlogo from '../../assets/logos/git-logo.svg'
import notionlogo from '../../assets/logos/notion-logo.svg'


function Header() {
  return (
    <div className="header">
      <div className="header__section_left">
        <div className="header__section_left__identity">
            <div className="header__section_left__identity__wrapper">
          <div className="header__section_left__identity__name">
            <h1>Aaditya Dokania</h1>
            <p>he/him</p>
          </div>
          <div className="header__section_left__identity__bio">
            <h3>Web Developer 👩‍💻 | Learner 🧠</h3>
          </div>
          </div>
          <div className="header__section_left__identity__profile">
              <img src={profile} alt="" />
          </div>
          
        </div>

        <div className="header__section_left__skills">
          <ul>
            <li> <img src={reactlogo}/>
              React Native</li>
            <li> <img src={javascriptlogo}/>Javascript</li>
            <li><img src={tailwindlogo}/>Tailwind</li>
            <li><img src={csslogo}/>Css</li>
            <li><img src={firebaselogo}/>Firebase</li>
            <li><img src={gitlogo}/>Github & Git</li>
            <li><img src={notionlogo}/>Notion</li>
          </ul>
        </div>

        {/* <div className="header__section_left__social_location">
          <p>📍 Bhubaneswar, India</p>
          <ul>
            <li>
              <a href="#">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <BsTwitter />
              </a>
            </li>
          </ul>
        </div> */}

<div className="header__section_left__social_location">
          <p>📍 Bhubaneswar, India</p>

          <ul>
            <li><a href="">
              <BsTwitter/>
              </a></li>

              <li><a href="">
              <BsLinkedin/>
              </a></li>

              <li><a href="">
              <BsInstagram/>
              </a></li>
          </ul>
          
        </div>
      </div>

      {/* ------------------------------------------ */}

      <div className="header__section_right">
          <img src={profile} alt="" />
      </div>
    </div>
  );
}

export default Header;
