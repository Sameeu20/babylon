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


function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Collections/>
        <div className=" flex justify-center items-center h-screen  ml-0 sm:ml-24 ">
      <LeftComponent />
      <CardCarousel />
    </div>
    
    <About/>
    <Material/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Home