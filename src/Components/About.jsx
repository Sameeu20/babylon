import React from "react";
import img from "../assets/About.jpg";
import { FaArrowRight } from "react-icons/fa6";


const About = () => {
 

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center ">
      <img className='ml-0' src={img} alt="img" width="600px" height="500px" />
      
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

        <div className=" flex justify-center lg:justify-start px-8 py-3">
          <button className=' hover:bg-[#f3c74e] hover:text-black flex items-center px-3  border border-[#f3c74e]'> More Info <FaArrowRight size={35} className="px-3"/></button>
        </div>
      </div>
    </div>
  );
};

export default About;
