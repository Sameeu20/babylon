import React from 'react';
import Header from './Header'; // Assuming you have a Header component
import bg from '../assets/service1.png';
import ServiceComponent from './ServiceComponent';
import ServiceData from './ServiceData';
import Filter from './Filter';
import Contact from './Contact';
import Footer from './Footer'

const servicePage = () => {
  return (
    <div className='h-screen w-full mx-auto'>
      <div>
        {/* Assuming you have a Header component */}
        <Header />
        <img className='w-200 object-cover object-center w-full h-[200px] object-clip ' src={bg}  />
      </div>
      <div>
        <Filter/>
      </div>
      <div>
        <ServiceComponent 
        details={ServiceData}
        />
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default servicePage;
