import React from "react";
import "./home.css";
import { GrLocation } from "react-icons/gr";
import {AiOutlineSearch} from "react-icons/ai"
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {BsListTask} from "react-icons/bs"
import {TbApps} from "react-icons/tb"
import {BsEmojiAngryFill,BsFillEmojiSmileFill,BsFillEmojiFrownFill,BsFillEmojiDizzyFill} from "react-icons/bs"
const Home = () => {
  return (
    <section className="home">
  

      <div className="homeContent container">
        <div className="textDiv">

          <h1 className="homeTitle">After A Long Time You Can Enjoy</h1>
          <p className="smallText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero sagittis duis congue a a vitae orci blandit. Est mi.</p>
          <div className="cardDiv flex">
        <GrLocation className="icon" />
          <div className="destinationInput">
          
            <label htmlFor="city">Location</label>
            
            <div className="input flex">
            
              <input type="text" placeholder="Enter name here...." />
              
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>


          <div className="searchOptions flex">
            <span>Search</span>
          </div>
        </div>
        </div>

        <div className="photoContent">
        <div className="emotionDiv">
        <h2>How was feelings?</h2>
        <BsFillEmojiSmileFill className="icon"/>
        <BsFillEmojiFrownFill className="icon"/>
        <BsFillEmojiDizzyFill className="icon"/>
        <BsEmojiAngryFill className="icon"/>
      </div>
        
       </div>
      </div>
   
      
    </section>
  );
};

export default Home;
