import React,{useState} from "react";
import "./navbar.css";
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
    const[active , setActive] = useState('navBar')
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    const removeNavbar = () => {
        setActive('navBar')
    }
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1 className="webName">
              Tour.Dot
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Discover
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Services
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pricing
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Blog
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className='btn'>
              <a href="#"> Login </a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon"/>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
