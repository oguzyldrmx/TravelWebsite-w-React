import React from "react";
import "./about.css";
const About = () => {
  return (
    <section className="about">
     
      <div className="aboutContent container grid">
      <div className="photoContent">

      </div>
        <div className="textDiv">
          <h1 className="aboutTitle">Why Choose Us?</h1>
          <p className="smallText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque
            purus eget dolor arcu luctus amet et et. Eget mauris purus venenatis
            in.
          </p>
          <p className="littleText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo sociis
            massa et phasellus.
          </p>
          <div className="learnMoreOptions flex">
          <span>Learn More</span>
        </div>
        <div className="cardTextWrapper flex">
          <div className="cardTextFirst flex">
            <h2>560+
            <p>Finding Destination</p>
            </h2>
            
          </div>
          <div className="cardTextSecond flex">
            <h2>30+
            <p>Years Experience</p>
            </h2>
            
          </div>
          <div className="cardTextThird flex">
            <h2>120k+
            <p>Happy Customers</p>
            </h2>
           
          </div>
        </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default About;
