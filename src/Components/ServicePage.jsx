import React, { useState,useRef,useEffect } from 'react';
import Header from './Header';
import bg from '../assets/service1.png';
import ServiceComponent from './ServiceComponent';
import Whychooses from './Whychoose';
import Filter from './Filter';
import Contact from './Contact';
import Footer from './Footer';
import ServiceData from './ServiceData';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const ServiceDescription=[
  {
    'heading':'Custom Design and Fabrication',
    'description':'This involves creating custom curtains or drapery according to the customers specifications. It includes selecting the fabric, determining the size and style of the curtains, and manufacturing them to fit the customers windows perfectly.'
  },
  {
    'heading':'Expert Hemming and Tailoring',
    'description':'For curtains, this would include hemming to adjust the length of the curtains as per the window size or desired length. Tailoring may involve adjusting the width or ensuring the curtains drape correctly.'
  },
]

const ServicePage = () => {
  const initialSelectedService = ServiceData.find((service) => service.id === "1");
  const [selectedService, setSelectedService] = useState(initialSelectedService);

  const handleServiceSelection = (serviceId) => {
    const selected = ServiceData.find((service) => service.id === serviceId);
    setSelectedService(selected);
  };

  const handleServiceLinkClick = (serviceId) => {
    // Handle the service link click, e.g., navigate to the service page
    console.log(`Service link clicked with ID: ${serviceId}`);
    // You can also call handleServiceSelection(serviceId) here if needed
  };

  const Cref=useRef(null)

  useEffect(()=>{
  const el=Cref.current;
  gsap.fromTo(el,{y:100},{y:0,duration:1})
  },[])

  return (
    <div className='h-screen w-full mx-auto'>
      <div>
        <Header onServiceLinkClick={handleServiceLinkClick} />
        <img className='w-200 object-cover object-center w-full h-[200px] object-clip ' src={bg} alt="Background" />
      </div>
      <div ref={Cref}>
        <Filter onSelectService={handleServiceSelection} />
      </div>a
      <div className='flex justify-center'>
        <ServiceComponent details={selectedService ? [selectedService] : []} />
      </div>
      
      
      <Contact /> 
      <Footer />
    </div>
  );
}

export default ServicePage;
