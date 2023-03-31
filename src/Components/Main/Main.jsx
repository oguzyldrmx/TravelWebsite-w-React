import React from "react";
import "./main.css";
import {BiPaperPlane} from 'react-icons/bi';
import {BsFillBalloonHeartFill} from 'react-icons/bs'
import {IoIosBookmarks} from 'react-icons/io';
import {MdOutlineSecurity} from 'react-icons/md';


const Main = () => {
  return (
    <section className="main section container">
      <div className="mainContainer grid">
        <div className="mainHeader flex">
          <div className="textDiv">
            <h2 className="mainTitle flex">We provide you best services
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
              sociis massa et phasellus. Egestas egestas at mi fermentum tellus
              hendrerit.
            </p></h2>
            
          </div>
        </div>
      <div className="mainBoxes grid">
        <div className="firstBox">
          <BiPaperPlane className="icon"/>
          <h3>Worlwide Traveling
          <p>
          Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Libero
            sagi ttis duis congue.
          </p>
          </h3>
          
        </div>
        <div className="secondBox">
          <BsFillBalloonHeartFill className="icon"/>
          <h3>Lot of choices
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Libero
            sagi ttis duis congue.
          </p>
          </h3>

        </div>
        <div className="thirdBox">
          <IoIosBookmarks className="icon"/>
          <h3>Easy Booking
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Libero
            sagi ttis duis congue.
          </p>
          </h3>
          
        </div>
        <div className="fourthBox">
          <MdOutlineSecurity className="icon"/>
          <h3>Lot of choices
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Libero
            sagi ttis duis congue.
          </p>
          </h3>
         
        </div>
      </div>
      </div>
    </section>
  );
};

export default Main;
