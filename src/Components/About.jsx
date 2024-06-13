import React from "react";
import img from "../assets/About.jpg";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import { useRef,useEffect } from "react";

const About = () => {
  const Cref=useRef(null)

  useEffect(()=>{
  const el=Cref.current;
  gsap.fromTo(el,{x:100},{x:0,duration:10,scrollTrigger:{
    trigger:el,
    scrub:1
  }})
  },[])


  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center " ref={Cref}>
      <img className='ml-0 hover:scale-105 duration-500' src={img} alt="img" width="600px" height="500px" />
      <div className=" p-5 max-sm:m-3 m-20 space-y-4 lg:pt-14">
      <p className="px-8 max-sm:ml-[70px] text-[#f3c74e]" >EXPEREINCES</p>
      <div>
 <h1 className="px-8 font-bold text-4xl md:text-start">
          We Provide You The Best Experience
        </h1>
      </div>
       
        <p className="px-8 max-sm:text-justify">
        At Babylon Interior Company, we specialize in creating personalized and captivating spaces that reflect your unique style and vision. From consultation to installation, our comprehensive services cover every aspect of interior design, ensuring a seamless and satisfying experience for our clients. With a focus on creativity, quality, and client satisfaction, let us transform your space into something truly extraordinary. Contact us today to bring your dream design to life with Babylon Interior Company.
        </p>

    
      </div>
    </div>
  );
};

export default About;
