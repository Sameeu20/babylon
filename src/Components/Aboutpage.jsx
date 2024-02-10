import React from 'react';
import bg from '../assets/about.png';
import Header from './Header';
import about from '../assets/aboutbg.png';
import Whychoose from './Whychoose';
import Contact from './Contact';

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
        <img className='w-200 object-cover object-center w-full h-[200px] object-clip' src={bg} alt='Background' />
      </div>
      <div className='h-screen w-full mx-auto grid grid-cols-2 gap-8'>
        <div className='p-5 m-20 space-y-4 lg:pt-14'>
          <h1 className='px-8 font-bold text-4xl text-center md:text-start'>
            About
          </h1>
          <p className=' max-sm:px-3 lg:px-8'>
          Babylon Curtain Trading LLC has grown fast to become one of UAE’s premier curtain making firms. Babylon Curtain Trading LLC specializes in making curtains and sofa fabrics,sofa re upholstery,
          Roman,Vertical,Venetian,wooden,bamboo blinds,bed spread,cusion,carpet and wallpaper fixing and supply.
          Our team of designers has worked with a variety of clients all of whom were highly impressed by the bespoke designs and the 
          professionalism of our staff. Our staff work as a team from start to finish,
          ensuring that we meet your expectations in terms of design and timeliness.
          Apart from making curtains and blinds, we also provide various soft furnishing services such as sofa,
          headboard re-upholstery and bedspread supply.
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
      <Contact/>
    </div>
  );
};

export default Aboutpage;
