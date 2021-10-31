import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

import "./Navbar.css";

const Navbar = () => {
    const [isClosed, setIsClosed] = useState(true);

    const toggleMenuHandler = () =>{
        setIsClosed(prevState => !prevState);
    }

    let displayClasses;

  return (
    <nav className="absolute w-full py-7">
      <div className="flex justify-between items-center">

        <img src={logo} alt="logo image" className="w-10 ml-4 lg:ml-6" />
        <img src={hamburger} alt="hamburger icon" 
            className={`hamburger mr-4 ${displayClasses = isClosed ? "block" : "hidden"}`}
            onClick={toggleMenuHandler}
         />

        <ul className={`${displayClasses = isClosed ? "hidden" : "flex"} md:flex flex-col md:flex-row 
        px-6 md:px-18 lg:px-24 font-subTitle text-white 
        fixed z-20 top-0 right-0 h-screen w-3/4 md:static md:h-auto md:w-auto`}>

            <img src={close} alt="close icon" 
            className="w-6  mt-6 mb-10 self-end close"
            onClick={toggleMenuHandler} />

          <li className="spacing">
            <NavLink activeClassName="activeLink" to="/home">
              <span className="mr-2">00</span>HOME
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/destination">
              <span className="mr-2">01</span>DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="crew">
              <span className="mr-2">02</span>CREW
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="technology">
              <span className="mr-2">03</span>TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
