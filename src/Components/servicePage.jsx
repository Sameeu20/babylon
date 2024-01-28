import React from 'react';
import Header from './Header'; // Assuming you have a Header component
import bg from '../assets/service1.png';
import ServiceComponent from './ServiceComponent';
import Filter from './Filter';
import Contact from './Contact';
import Footer from './Footer'
import { useState } from 'react';

const servicePage = () => {
  
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  const handleServiceLinkClick = (serviceId) => {
    // Handle the service link click, e.g., navigate to the service page
    console.log(`Service link clicked with ID: ${serviceId}`);
  };

  return (
    <div className='h-screen w-full mx-auto'>
      <div>
        {/* Assuming you have a Header component */}
        <Header onServiceLinkClick={handleServiceLinkClick} />
        <img className='w-200 object-cover object-center w-full h-[200px] object-clip ' src={bg}  />
      </div>
      <div>
        <Filter onSelectService={handleServiceSelection} />
      </div>
      <div className='h-[60vh]'>
      <ServiceComponent details={selectedService ? [selectedService] : []} />
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default servicePage;
