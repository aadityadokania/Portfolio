import React from "react";
import "./Resume.css";
import {FaCircle} from 'react-icons/fa'
import './Resume.small.css'

function Resume() {
  return (
    <div className="resume">
      <div className="resume__card">
        <div className="resume__card__heading">
          <h2>🎓 Education</h2>
        </div>

        <hr />

        <div className="resume__card__table">
          <div className="resume__card__table_row">
            <div className="resume__card__table_row__left">
              <p>Aug, 2020</p>
              <p>May, 2017</p>
            </div>

            <div className="resume__card__table_row__line">
                <i><FaCircle size={10}/></i>
            </div>

            <div className="resume__card__table_row__right">
              <h3>Edwards English School</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          {/* -------------------------- */}

          <div className="resume__card__table_row">
            <div className="resume__card__table_row__left">
              <p>Aug, 2020</p>
              <p>May, 2017</p>
            </div>

            <div className="resume__card__table_row__line">
                <i><FaCircle size={10}/></i>
            </div>

            <div className="resume__card__table_row__right">
              <h3>Edwards English School</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
