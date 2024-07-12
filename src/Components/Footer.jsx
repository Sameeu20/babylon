import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black hover:bg-gray-950 text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">Babylon Curtain Trading LLC</h1>
          <p className="text-sm">Babylon makes home aesthetic and modern</p>
          <div className="flex p-3">
            <a href="https://www.facebook.com/117580581442542">
              <BsFacebook size={30} className="p-2" />
            </a>
            <a href="https://www.instagram.com/babylon_interior.in?igsh=cXB1cHc0aG42dzg4&utm_source=qr">
              <BsInstagram size={30} className="p-2" />
            </a>
          </div>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <Link to="/services" onClick={scrollToTop} className="hover:text-[#E58411] transition-all cursor-pointer">
              Services
            </Link>
            <Link to="/about" onClick={scrollToTop} className="hover:text-[#E58411] transition-all cursor-pointer">
              About
            </Link>
            <Link to="/portfolio" onClick={scrollToTop} className="hover:text-[#E58411] transition-all cursor-pointer">
              Portfolio
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a className="hover:text-brightColor transition-all cursor-pointer" href="mailto:Babyloncurtain@gmail.com">
              Babyloncurtain@gmail.com
            </a>
            <a className="hover:text-brightColor transition-all cursor-pointer" href="tel:+971529494072">
              +971 529494072
            </a>
            <a className="hover:text-brightColor transition-all cursor-pointer" href="/">
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div className="text-center py-4">
        <p>© All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
