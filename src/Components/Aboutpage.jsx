import React from 'react';
import bg from '../assets/about.png';
import Header from './Header';
import about from '../assets/aboutbg.png';
import Whychoose from './Whychoose';

const Aboutpage = () => {
  const cardsData = [
    { heading: 'Free Delivery', description: 'Lorem ipsum dolor sit amet.' },
    { heading: 'Free Delivery', description: 'Lorem ipsum dolor sit amet.' },
    { heading: 'Support 24/7', description: 'Lorem ipsum dolor sit amet.' },
    { heading: 'Support 24/7', description: 'Lorem ipsum dolor sit amet.' },
    { heading: 'Free Delivery', description: 'Lorem ipsum dolor sit amet.' },
    { heading: 'Free Delivery', description: 'Lorem ipsum dolor sit amet.' },
  ];

  return (
    <div className='h-screen w-full mx-auto'>
      <div>
        <Header />
        <img className='w-200' src={bg} alt='Background' />
      </div>
      <div className='h-screen w-full mx-auto grid grid-cols-2 gap-8'>
        <div className='p-5 m-20 space-y-4 lg:pt-14'>
          <h1 className='px-8 font-bold text-4xl text-center md:text-start'>
            About
          </h1>
          <p className='px-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            architecto quisquam delectus minima perferendis nulla quia nisi
            laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
            molestias omnis reprehenderit quae animi? Explicabo quasi accusamus
            laboriosam temporibus delectus, aut a? Quasi?
          </p>
        </div>
        <div className='py-5'>
          <img className='mt-[30px]' src={about} alt='About' />
        </div>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <h1 className='text-black text-shadow-md font-montserrat text-2xl md:text-3xl lg:text-4xl xl:text'>
          Why Choosing Us
        </h1>
        <div className='flex flex-wrap gap-x-317 gap-y-8 justify-center ml-72'>
          {cardsData.map((card, index) => (
            <div key={index} className='w-1/2'>
              <Whychoose {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
