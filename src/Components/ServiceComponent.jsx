import React from 'react';


const ServiceComponent = (props) => {
  return (
    props.details.map((value, index) => {
      return (
        <div className=' h-[60vh] w-full mx-auto ' key={index}>
              <div className='grid grid-cols-2'>
              <div className='mt-[10px]'>
                <img className='w-[600px] ' src={value.img}/>
                </div>
                <div className='mt-[50px]'>
                <h1 className='font-medium  text-4xl pt-7 pb-5 '>{value.title}</h1>
                <p className=' flex flex-col pr-[50px] justify-normal'>{value.desc}</p>
                </div>
                
                
              </div>
              
              </div>
      

      )
    })
  );
}

export default ServiceComponent;
