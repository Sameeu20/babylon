import React from 'react';
import bg from '../assets/about.png';
import Header from './Header';
import about from '../assets/aboutbg.png';
import Whychoose from './Whychoose';
import Contact from './Contact';

const Aboutpage = () => {
  const cardsData = [
    { heading: 'Consultation and Design', description: "Providing advice on suitable styles, fabrics, and colors for curtains based on the client 's preferences and interior decor" },
    { heading: 'Customization', description: "Tailoring curtains to fit specific window dimensions and design requirements." },
    { heading: 'Fabric Selection', description: 'Offering a variety of fabrics such as silk, linen, cotton, and synthetics with different textures and patterns.' },
    { heading: 'Measurement and Installation', description: 'Taking accurate measurements of windows and professionally installing curtains to ensure a perfect fit.' },
    { heading: 'Maintenance and Cleaning', description: 'Advising on care instructions and sometimes offering cleaning services to maintain curtain quality.' },
    { heading: 'Additional Products', description: 'Providing related products like curtain rods, tie-backs, and hardware for a complete window treatment solution.' },
  ];

  return (
    <div className='w-full mx-auto'>
      <Header />
      <img className='w-full object-cover h-64 md:h-[200px]' src={bg} alt='Background' />
      <div className='p-5 md:grid md:grid-cols-2 md:gap-8 md:py-10'>
        <div className='space-y-4 mt-14 ml-4'>
          <h1 className='font-bold text-2xl md:text-4xl text-center md:text-start'>
            About
          </h1>
          <p>
            Babylon Curtain Trading LLC has grown fast to become one of UAE’s premier curtain making firms. Babylon Curtain Trading LLC specializes in making curtains and sofa fabrics, sofa re-upholstery, Roman, Vertical, Venetian, wooden, bamboo blinds, bedspread, cushion, carpet, and wallpaper fixing and supply. Our team of designers has worked with a variety of clients all of whom were highly impressed by the bespoke designs and the professionalism of our staff. Our staff work as a team from start to finish, ensuring that we meet your expectations in terms of design and timeliness. Apart from making curtains and blinds, we also provide various soft furnishing services such as sofa, headboard re-upholstery, and bedspread supply.
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <img className='mt-5 md:mt-0 max-w-full' src={about} alt='About' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center py-10'>
        <h1 className='text-black text-shadow-md font-montserrat text-2xl md:text-3xl lg:text-4xl'>
          Why Choosing Us
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ml-4 md:ml-0'>
          {cardsData.map((card, index) => (
            <div key={index} className='w-full'>
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
