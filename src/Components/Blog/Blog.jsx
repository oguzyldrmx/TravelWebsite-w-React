import React from 'react'
import './blog.css'
import {FaUserAlt} from 'react-icons/fa';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

// const Data = [
//     {
//       id: 1,
//       name: "Enjoy the beauty of the railto Hill",
//       location: "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Liberosagi ttis duis congue.",
//       grade: "4.5     (1.5k+ Review)",
//     },
//     {
//       id: 2,
//       name: "Enjoy the beauty of the floating city",
//       location: "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Liberosagi ttis duis congue.",
//       grade: "4.5     (1.7k+ Review)",
//     },
//     {
//       id: 3,
//       name: "Enjoy the beauty of the floating Egypt",
//       location: "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Liberosagi ttis duis congue.",
//       grade: "4.5      (2.5k+ Review)",
//     },
//   ];
const Blog = () => {
  return (
    <section className="blog section container">
    <div className="blogContainer grid">
      <div className="blogHeader flex">
        <div className="textDiv">
          <h2 className="blogTitle">Experience of Our Customers</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo sociis massa et phasellus. Egestas egestas.
          </p>
        </div>
      </div>

      <div className="iconsDiv flex">
            <BsArrowLeftShort className="leftIcon" />
            <BsArrowRightShort className="rightIcon" />
        </div>
        <div className="blogBoxes grid">
      <div className="firstBox">
        
          <h3><FaUserAlt className="icons"/>Morich Brown
          
          </h3>
          <p>
          Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Libero
            sagi ttis duis congue.
          </p>
         
        </div>
        <div className="secondBox">
        
          <h3><FaUserAlt className="icons"/>Sahara Ben
         
          </h3>
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Libero
            sagi ttis duis congue.
          </p>
          
          
        </div>
        <div className="thirdBox">
       
          <h3>   <FaUserAlt className="icons"/> Morich Brown
          
          </h3>
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Libero
            sagi ttis duis congue.
          </p>
          
        </div>
        </div>
    </div>
  </section>
  )
}

export default Blog