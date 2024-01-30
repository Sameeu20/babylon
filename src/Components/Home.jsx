import React from 'react'
import LeftComponent from './LeftComponent';
import CardCarousel from './CardCarousel'
import Header from './Header';
import Hero from './Hero'
import Contact from './Contact';
import Footer from './Footer';
import Material from './Material';
import About from './About';
import Collections from './Collections';
import Testimonials from './Testimonials';
import Headroom from 'react-headroom';
import Marquee from 'react-fast-marquee';


function Home() {
  return (
    <div>
      <Headroom>
      <Header/>
      </Headroom>
        
        <Hero/>
        <Collections/>
        <div className=" flex justify-center items-center h-screen  ml-0 sm:ml-24 ">
      <LeftComponent />
      <CardCarousel />
    </div>
    
    <About/>
    <Material/>
    <div className='flex flex-col items-center justify-center text-4xl font-medium pb-[50px] pt-[100px]'><h1>What our Client says</h1></div>
    <Marquee speed={80}>
      <Testimonials/>
    </Marquee>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Home