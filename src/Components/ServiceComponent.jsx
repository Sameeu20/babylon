import React from 'react';

const ServiceComponent = ({ details }) => {
  return (
    <div className='w-full mx-auto p-5'>
      {details.map((value, index) => (
        <div key={index} className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-8 items-center'>
          <div className='lg:col-span-1 lg:row-span-1'>
            <img className='w-full h-auto' src={value.img} alt={value.title} />
          </div>
          <div className='lg:col-span-1 lg:row-span-1 mt-5 lg:mt-0'>
            <h1 className='font-medium text-4xl pt-7 pb-5'>{value.title}</h1>
            <p className='pr-4'>{value.desc}</p>
          </div>
          <div className="bg-white p-8 m-4 rounded grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mx-auto lg:col-span-2 lg:row-span-1">
            {value.services.map((service, idx) => (
              <div key={idx} className="border border-gray-200 p-4 rounded-lg">
                <h2 className="text-gray-800 font-semibold text-lg mb-2">{service.heading}</h2>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceComponent;
