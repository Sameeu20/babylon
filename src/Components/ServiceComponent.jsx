// ServiceComponent.js
import React from 'react';

const ServiceComponent = (props) => {
  const { details } = props;

  return (
    details.map((value, index) => (
      <div className='h-[60vh] w-full mx-auto' key={index}>
        <div className='grid grid-cols-2'>
          <div className='mt-[10px]'>
            <img className='w-[600px]' src={value.img} alt={value.title} />
          </div>
          <div className='mt-[50px]'>
            <h1 className='font-medium text-4xl pt-7 pb-5'>{value.title}</h1>
            <h1 className='flex flex-col pr-[50px] justify-normal'>{value.desc}</h1>
          </div>
        </div>
      </div>
    ))
  );
};

export default ServiceComponent;