import React, { useState } from 'react';
import ServiceData from './ServiceData';
import ServiceComponent from './ServiceComponent';


const Filter = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [selectedService, setSelectedService] = useState(null);


  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    const service = ServiceData.find((item) => item.id === buttonNumber.toString());
    setSelectedService(service);
  }
  

  return (
    <div className='flex flex-col items-center w-full h-[50vh] mx-auto'>
      <div className='grid grid-rows-3 h-[13vh]'>
        <div className='flex flex-row items-center w-[550px] border-none h-[70px] bg-gray-200 text-gray-500 rounded-[30px] mt-[70px] p-2 '>
          <button
            className={`w-[200px] h-[45px] rounded-[30px] border-none px-2 hover:bg-white ${activeButton === 1 ? 'bg-white' : ''}`}
            onClick={() => handleButtonClick(1)}
          >
            Curtains & Sofa Fabric
          </button>
          <button
            className={`w-[170px] h-[45px] rounded-[30px] border-none px-2 ml-[7px] hover:bg-white ${activeButton === 2 ? 'bg-white' : ''}`}
            onClick={() => handleButtonClick(2)}
          >
            Curtains In Dubai
          </button>
          <button
            className={`w-[170px] h-[45px] rounded-[30px] border-none px-2 ml-[7px] hover:bg-white ${activeButton === 3 ? 'bg-white' : ''}`}
            onClick={() => handleButtonClick(3)}
          >
            Sofa Upholstery
          </button>
        </div>
      </div>

      {/* Second set of buttons */}
      <div className='grid grid-rows-3 h-[13vh] mt-[70px]'>
        <div className='flex flex-row items-center w-[784px] border-none h-[70px] bg-gray-200 text-gray-500 rounded-[30px] px-2 '>
          <button
            className={`w-[200px] h-[45px] rounded-[30px] border-none px-2 hover:bg-white ${activeButton === 4 ? 'bg-white' : ''}`}
            onClick={() => handleButtonClick(4)}
          >
            Roman Blinds
          </button>
          <button
            className={`w-[170px] h-[45px] rounded-[30px] border-none px-2 ml-[4px] hover:bg-white ${activeButton === 5 ? 'bg-white' : ''}`}
            onClick={() => handleButtonClick(5)}
          >
            Vertical Blinds
          </button>
          <button
            className={`w-[170px] h-[45px] rounded-[30px] border-none px-2 ml-[7px] hover:bg-white ${activeButton === 6 ? 'bg-white' : ''}`}
            onClick={() => handleButtonClick(6)}
          >
           Bed Spread, Cushions
          </button>
          <button
            className={`w-[170px] h-[45px] rounded-[30px] border-none px-2 ml-[7px] hover:bg-white ${activeButton === 7 ? 'bg-white' : ''}`}
            onClick={() => handleButtonClick(7)}
          >
            OutDoor
          </button>
        </div>
      </div>

      {/* Third set */}
      <div className='grid grid-rows-3 h-[13vh] '>
        <div className='flex flex-row items-center w-[950px] border-none h-[70px] bg-gray-200 text-gray-500 rounded-[30px] p-2 '>
          <button
            className={`w-[200px] h-[45px] rounded-[30px] border-none px-2 hover:bg-white ${activeButton === 8 ? 'bg-white' : ''}`}
            onClick={() => handleButtonClick(8)}
          >
            Wooden Blinds
          </button>
          <button
            className={`w-[170px] h-[45px] rounded-[30px] border-none px-2 ml-[7px] hover:bg-white ${activeButton === 9 ? 'bg-white' : ''}`}
            onClick={() => handleButtonClick(9)}
          >
            Bamboo Blinds
          </button>
          <button
            className={`w-[170px] h-[45px] rounded-[30px] border-none px-2 ml-[20px] hover:bg-white ${activeButton === 10 ? 'bg-white' : ''}`}
            onClick={() => handleButtonClick(10)}
          >
           Venetian Blinds
          </button>
          <button
            className={`w-[270px] h-[45px] rounded-[30px] border-none px-2 ml-[45px] hover:bg-white ${activeButton === 11 ? 'bg-white' : ''}`}
            onClick={() => handleButtonClick(11)}
          >
            Carpet, Wallpaper Supply & Fixing
          </button>
        </div>
      </div>
      {selectedService && <ServiceComponent details={[selectedService]} />}
    </div>
  );
};

export default Filter;
