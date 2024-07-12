import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import navbarLogo from '../assets/navbar-logo.png'

const Navbar = ({ onServiceLinkClick,}) => {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{zIndex:100}}  className={`fixed w-full transition-transform duration-300 ${scrolling ? "-translate-y-full" : "translate-y-0"}`}>
      <div>
        
        <div className="flex flex-row justify-between p-5 md:px-20 px-5 text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer">
          <img src={navbarLogo} className="w-[72px] h-[72px]" alt="Navbar Logo" />
          <h1 className="font-sans  font-semibold text-white-900">Babylon Curtain Trading LLC</h1>
        </div>


          <nav className="hidden md:flex flex-row items-center  md:px-[100px]  lg:px-[250px] text-lg font-medium gap-8 ">
            <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-[#E58411]  transition-all cursor-pointer">
              Home
            </Link>

            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="/services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-[#E58411] transition-all cursor-pointer"
                  // onClick={() => onServiceLinkClick("1")} // Pass the service ID here
                >
                  Services
                </Link>
              </div>
            </div>

            <Link to="/about" spy={true} smooth={true} duration={500} className="hover:text-[#E58411] transition-all cursor-pointer">
              About
            </Link>

            <Link to="/portfolio" spy={true} smooth={true} duration={500} className="hover:text-[#E58411] transition-all cursor-pointer">
              Portfolio
            </Link>
         {/* <Link1 
         to="/contact"
         spy={true}
            smooth={true}
            duration={1400} 
            offset={-100}
            
            >
         <Button title="Contact"  /></Link1> */}
           
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? <AiOutlineClose size={25} onClick={handleChange} /> : <AiOutlineMenuUnfold size={25} onClick={handleChange} />}
          </div>
        </div>
        <div
  className={` ${
    menu ? "translate-x-0" : "-translate-x-full"
  } lg:hidden flex flex-col absolute bg-black bg-opacity-50 backdrop-blur-md text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
>
  <Link
    to="/"
    spy={true}
    smooth={true}
    duration={500}
    className="hover:text-[#E58411] transition-all cursor-pointer"
    onClick={closeMenu}
  >
    Home
  </Link>
  <Link
    to="/services"
    spy={true}
    smooth={true}
    duration={500}
    className="hover:text-[#E58411] transition-all cursor-pointer"
    // Pass the service ID here
  >
    Services
  </Link>
  <Link
    to="/about"
    spy={true}
    smooth={true}
    duration={500}
    className="hover:text-[#E58411] transition-all cursor-pointer"
    onClick={closeMenu}
  >
    About
  </Link>
  <Link
    to="/portfolio"
    spy={true}
    smooth={true}
    duration={500}
    className="hover:text-[#E58411] transition-all cursor-pointer"
    onClick={closeMenu}
  >
    Portfolio
  </Link>
  {/* <Link1
    to="/contact"
    spy={true}
    smooth={true}
    duration={1400}
    offset={-100}
  >
    <Button className='hover:bg-[#E58411]' title="Contact" />
  </Link1> */}
</div>

      </div>
    </div>
  );
};

export default Navbar;
