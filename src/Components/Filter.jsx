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
    <div className="w-1/2 overflow-x-auto whitespace-nowrap py-4 bg-white shadow-md rounded-lg">
      <div className="inline-flex space-x-4 px-4">
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
    </div>
    
    {/* Old Style */}
    
      {/* <div className='mt-8' >

        
        {ServiceData.map((service) => (
          <button
            key={service.id}
            className={`max-sm:w-[130px] w-[230px] h-12 rounded-[30px] border-none px-2  mb-2 hover:bg-white ${activeButton === service.id ? 'bg-white' : 'bg-gray-200'}`}
            onClick={() => handleButtonClick(service.id)}
          >
            {service.title}
          </button>
        ))}
      </div> */}
      {selectedService && <ServiceComponent details={[selectedService]} />}
    </div>
  );
};

export default Filter;