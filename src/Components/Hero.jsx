import React from "react";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-center items-center lg:px-32 px-5 bg-[url('./assets/hero.jpg')] ">
      <div className=" ml-[100px] p-[100px] w-full ">
        <h1 className=" text-white font-semibold p-[20px] text-6xl">
          Make Your Interior More Minimalistic & Modern
        </h1>
        <p className="px-[100px] text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et qui,
          maxime assumenda repellat corrupti officia dolorum delectus labore
          deleniti?
        </p>
        <div className=" py-[20px]  lg:pl-44">
         <input className='rounded-full py-[10px] px-[25px] justify-center 'type="text" placeholder="Search your products" />
          <button className='text-white border rounded-full border-[#f3c74e] p-3 ml-2'><BsSearch className="text-#f3c74e]"/></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
