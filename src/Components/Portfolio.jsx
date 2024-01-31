import React, { useState } from 'react';
import Header from './Header';
import bg from '../assets/portfolioimg.png';
import ImageGrid from './ImageGrid';

const categories = ['Nature', 'Animals', 'City', 'Food'];

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const images = {
    Nature: [
      { src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg', title: 'Nature 1' },
      { src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg', title: 'Nature 2' },
      { src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg', title: 'Nature 3' },
      { src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg', title: 'Nature 4' },
      // Add more images for the Nature category
    ],
    Animals: [
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-6xb-6GVydfB0Fa4HjisAh2TVu1QJXUcTA&usqp=CAU', title: 'Animal 1' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-6xb-6GVydfB0Fa4HjisAh2TVu1QJXUcTA&usqp=CAU', title: 'Animal 2' },
      // Add more images for the Animals category
    ],
    City: [
      { src: 'https://upload.wikimedia.org/wikipedia/commons/0/01/New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6448.jpg', title: 'City 1' },
      { src: 'https://upload.wikimedia.org/wikipedia/commons/0/01/New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6448.jpg', title: 'City 2' },
      // Add more images for the City category
    ],
    Food: [
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg', title: 'Food 1' },
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg', title: 'Food 2' },
      // Add more images for the Food category
    ],
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <>
      <div className='h-[40vh] w-full mx-auto'>
        <Header />
        <img className='w-200 ' src={bg} alt="Background" />
      </div>

      {/* Uncomment this section if you need it */}
      <div className='flex flex-col items-center w-full h-auto mx-auto'>
        <div className='grid grid-rows-3 h-[13vh]'>
          <div className='flex flex-row items-center w-[550px] border-none h-[70px] bg-gray-200 text-gray-500 rounded-[30px] mt-[70px] p-2 '>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`w-[200px] h-[45px] rounded-[30px] border-none px-2 hover:bg-white ${currentCategory === category ? 'bg-white' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

  
        <h2 className="text-2xl font-bold mb-4">{currentCategory} Images</h2>
        <ImageGrid images={images[currentCategory]} />
    
    </>
  );
};

export default Portfolio;
