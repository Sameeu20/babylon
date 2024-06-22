import React, { useRef, useEffect } from "react";
import bg from "../assets/material-img.png";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Material = () => {
  const Cref = useRef(null);

  useEffect(() => {
    const el = Cref.current;
    gsap.fromTo(el, { x: -100 }, { x: 0, duration: 10, scrollTrigger: { trigger: el, scrub: 1 } });
  }, []);

  return (
    <div className="lg:h-[100vh] w-full mx-auto grid md:grid-rows-2 lg:grid-cols-2" ref={Cref}>
      <div className="p-5 m-5 lg:m-20 space-y-4 lg:pt-14">
        <p className="px-4 text-[#f3c74e] max-sm:text-center">EXPERIENCES</p>
        <h1 className="px-4 font-bold text-4xl text-center md:text-start">
          Transforming Your Space with Elegance
        </h1>
        <p className="px-4 text-justify">
          At Babylon, we pride ourselves on delivering tailor-made curtain solutions that enhance the beauty and functionality of your interiors. Our dedicated team guides you through every step, from expert consultation to meticulous installation, ensuring a seamless and enjoyable journey. Committed to excellence, innovation, and your complete satisfaction, we create stunning window treatments that elevate your home or office environment. Reach out to us today to start your journey toward a beautifully transformed space with Babylon.
        </p>
      </div>
      <div className="py-5">
        <img className="mt-[30px] hover:scale-105 duration-500 w-full h-auto" src={bg} alt="Material" />
      </div>
    </div>
  );
};

export default Material;
