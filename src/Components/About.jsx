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
      
      <div className=" p-5 m-20 space-y-4 lg:pt-14">
      <p className="px-8 text-[#f3c74e]" >EXPEREINCES</p>
        <h1 className=" px-8 font-bold text-4xl text-center md:text-start">
          We Provide You The Best Experience
        </h1>
        <p className="px-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          architecto quisquam delectus minima perferendis nulla quia nisi
          laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
          molestias omnis reprehenderit quae animi? Explicabo quasi accusamus
          laboriosam temporibus delectus, aut a? Quasi?
        </p>

    
      </div>
    </div>
  );
};

export default About;
