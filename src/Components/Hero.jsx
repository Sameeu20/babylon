import bg from '../assets/img.jpg';
import gsap from 'gsap';
import { useEffect,useRef } from 'react';

const Home = () => {

  const Cref=useRef(null)

  useEffect(()=>{
  const el=Cref.current;
  gsap.fromTo(el,{y:150},{y:0,duration:3})
  },[])
  const containerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="w-full h-screen flex flex-row justify-center items-center lg:px-32 bg-gray-300" style={containerStyle}>
      <div className="lg:ml-[100px] lg:p-[100px] text-white w-full" ref={Cref}>
        <h1 className="text-white font-semibold max-sm:text-4xl lg:p-[20px] md:p-[10px] md:text-5xl text-6xl items-center text-center hover:scale-105 duration-700 bg-gradient-to-r from-white via-gray-200 to-white  bg-clip-text text-transparent" >
          Make Your Interior More Minimalistic & Modern
        </h1>
        <p className="max-sm:px-[50px] max-sm:text-justify max-sm:pt-[10px] px-[100px] items-center justify-center text-center">
          Babylon Curtain Trading LLC offers an extensive range of curtains, sofa, carpets in Dubai, Sharjah, Abu Dhabi, U.A.E., and the surrounding region and gives you more choice, more value, and all the services you need under one roof.
        </p>
      </div>
    </div>
  );
};

export default Home;
