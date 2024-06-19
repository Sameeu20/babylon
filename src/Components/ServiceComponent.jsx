import React from 'react';

const ServiceComponent = ({ details }) => {
  return (
    <div className='h-[60vh] w-full mx-auto p-5'>
      {details.map((value, index) => (
        <div key={index} className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div className='lg:mt-0'>
            <img className='w-full h-auto' src={value.img} alt={value.title} />
          </div>
          <div className='lg:mt-0 mt-5'>
            <h1 className='font-medium text-4xl pt-7 pb-5'>{value.title}</h1>
            <p className='pr-4'>{value.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceComponent;
