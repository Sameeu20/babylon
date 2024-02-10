import React, { useState, useEffect } from 'react';
import ServiceData from './ServiceData';
import ServiceComponent from './ServiceComponent';

const Filter = ({ onSelectService }) => {
  const [activeButton, setActiveButton] = useState(1);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // Update the selected service when the active button changes
    const service = ServiceData.find((item) => item.id === activeButton.toString());
    setSelectedService(service);
  }, [activeButton]);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  // Notify the parent component about the selected service
  useEffect(() => {
    onSelectService(selectedService);
  }, [onSelectService, selectedService]);

  return (
    <div className='flex flex-col items-center w-full mb-[100px]'>
      <div className='absolute bg-gray-200 h-[68px] w-[1240px] rounded-[100px] mt-[52px]' />
      <div className='absolute bg-gray-200 h-[68px] w-[1240px] rounded-[100px] mt-[125px]' />
      <div className='absolute bg-gray-200 h-[60px] max-sm:w-[500px] md:w-[1000px] w-[240px] rounded-[100px] mt-[200px]' />
      <div className='lg:hidden absolute bg-gray-200 h-[60px] max-sm:w-[500px] md:w-[1000px] w-[240px] rounded-[100px] mt-[270px]' />
      <div className=' lg:hidden absolute bg-gray-200 h-[60px] max-sm:w-[500px] md:w-[1000px] w-[240px] rounded-[100px] mt-[345px]' />
      <div className='relative flex flex-wrap justify-center gap-4 py-3 mt-[50px]  rounded-[50px]  mx-[25px] '>
        
        {ServiceData.map((service) => (
          <button
            key={service.id}
            className={`max-sm:w-[130px] w-[230px] h-12 rounded-[30px] border-none px-2  mb-2 hover:bg-white ${activeButton === service.id ? 'bg-white' : 'bg-gray-200'}`}
            onClick={() => handleButtonClick(service.id)}
          >
            {service.title}
          </button>
        ))}
      </div>
      {selectedService && <ServiceComponent details={[selectedService]} />}
    </div>
  );
};

export default Filter;
