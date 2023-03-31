import React from "react";
import "./popular.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

import img from "../../Assets/img.webp";
import img2 from "../../Assets/img2.jpg";
import img4 from "../../Assets/img4.jpg";

const Data = [
  {
    imgSrc: img,
    destTitle: "Enjoy the beauty of the railto Hill",
    location: "Vengema, Indonesia",
    grade: "4.5     (1.5k+ Review)",
  },
  {
    imgSrc: img2,
    destTitle: "Enjoy the beauty of the floating city",
    location: "Bahrando, Italy",
    grade: "4.5     (1.7k+ Review)",
  },
  {
    imgSrc: img4,
    destTitle: "Enjoy the beauty of the floating Egypt",
    location: "Egypt",
    grade: "4.5      (2.5k+ Review)",
  },
];

const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular place for new experience</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
              sociis massa et phasellus. Egestas egestas.
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className="leftIcon" />
            <BsArrowRightShort className="rightIcon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({imgSrc,destTitle,location,grade}) => {
            return (
              <div key={imgSrc} className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="Img" />
                </div>
                <div key={imgSrc} className="destFooter">
                  <div key={destTitle} className="destName">
                    {destTitle}
                    <div key={location} className="destText">
                      <p>{location}</p>
                      <div key={grade} className="destReview">
                        <AiFillStar />
                        {grade}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
