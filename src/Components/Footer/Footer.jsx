import React from "react";
import "./footer.css";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container flex">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo">
              <h1 className="flex">Tour.Dot</h1>
              <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Leo sociis massa et pha sellus. Egestas eges Leo sociis</p>
            </a>
          </div>

        </div> 
        <div className="footerLinks flex">   
        <div className="footerLinksMenu">
          <span className="linkTitle">
            Menu
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </div>
        <div className="footerLinksBooking">
          <span className="linkTitle">
            Booking Plan
          </span>
          <li>
            <a href="#">Personal Trip</a>
          </li>
          <li>
            <a href="#">Group Trip</a>
          </li>
          {/* <span className="phone">+444 567 6655</span>
          <span className="email">oguzyldrm52@gmail.com</span> */}
        </div>
        <div className="footerLinksInformation">
          <span className="linkTitle">
          Further Information
          </span>
          <li>
            <a href="#">Term & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          {/* <span className="phone">+444 567 6655</span>
          <span className="email">oguzyldrm52@gmail.com</span> */}
        </div>
        <div className="footerLinksContact">
          <span className="linkTitle">Get in touch</span>
          <span className="phone">+444 567 6655</span>
        </div>
        </div>
       
      </div>
      <div className="copyright">
          <p>Copyright. All right reseved.</p>
        </div>
    </div>
  );
};

export default Footer;
