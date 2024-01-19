import React from 'react';
import star from '../assets/star.png';

const Testimonialcards = (props) => {
  return (
    props.details.map((value, index) => {
      return (
        <div className='grid grid-rows-3 py-9' key={index}>
          <div className='border border-black rounded-[20px] w-[300px] h-[385px]'>
            <div className='relative'>
              <img className='absolute rounded-[20px]' src={value.bg} alt='/' />
              <div className='bg-white top-36 m-4 absolute border border-white rounded-[20px] w-[264px] h-[206px] '>
                <p className='absolute font-medium text-xl m-5 top-5 mx-[85px]'>{value.name}</p>
                <p className='absolute font-medium text-sm opacity-[80%] m-5 top-[50px] mx-[90px]'>{value.job}</p>
                <p className='absolute text-xs opacity-[80%] top-[60px] m-[20px] ml-[28px] justify-normal py-5 '>{value.content}</p>
                <img className='h-[15px] ml-[90px] mt-[170px]' src={star} alt='/' />
              </div>
              <div className='ml-[95px] top-[100px] bg-white absolute border border-white rounded-full h-[100px] w-[100px]'></div>
              <div className='ml-[100px] top-[106px] bg-white absolute border border-white rounded-full h-[90px] w-[90px]'>
                <img src={value.image} alt='/' />
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default Testimonialcards;