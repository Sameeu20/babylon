import React, { useState } from 'react';
import Header from './Header';
import bg from '../assets/portfolioimg.png';
import ImageGrid from './ImageGrid';

const categories = ['Curtains', 'Sofa_fabrics', 'Sofa_re_upholstery', 'Blinds'];

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const images = {
    Curtains: [
      { src: './src/assets/curtains/curtain_1.jpg', title: 'Curtain 1' },
      { src: './src/assets/curtains/curtain_2.jpeg', title: 'Curtain 2' },
      { src: './src/assets/curtains/curtain_3.jpeg', title: 'Curtain 3' },
      { src: './src/assets/curtains/curtain_4.jpeg', title: 'Curtain 4' },
      { src: './src/assets/curtains/curtains_5.jpeg', title: 'Curtain 5' },
      { src: './src/assets/curtains/curtains_6.jpeg', title: 'Curtain 6' },
      { src: './src/assets/curtains/curtains_7.jpeg', title: 'Curtain 7' },
      { src: './src/assets/curtains/curtains_8.jpeg', title: 'Curtain 8' },
      { src: './src/assets/curtains/curtains_9.jpeg', title: 'Curtain 9' },
      { src: './src/assets/curtains/curtains_10.jpeg', title: 'Curtain 10' },
      { src: './src/assets/curtains/blinds_curtains_dubai.jpeg', title: 'Blinds Curtain Dubai' },
      { src: './src/assets/curtains/blinds_curtains_dubai2.jpeg', title: 'Blinds Curtain Dubai 2' },
      { src: './src/assets/curtains/curtains_11.jpeg', title: 'Curtains 11' },
      { src: './src/assets/curtains/curtains_dubai3.jpeg', title: 'Curtain Dubai 3' },
      { src: './src/assets/curtains/curtains_dubai4.jpeg', title: 'Curtain Dubai 4' },
      { src: './src/assets/curtains/curtains_dubai5.jpeg', title: 'Curtain Dubai 5' },
      { src: './src/assets/curtains/curtains_dubai6.jpeg', title: 'Curtain Dubai 6' },
      { src: './src/assets/curtains/curtains_dubai7.jpeg', title: 'Curtain Dubai 7' },
      { src: './src/assets/curtains/curtains_dubai8.jpeg', title: 'Curtain Dubai 8' },
      { src: './src/assets/curtains/curtains_dubai9.jpeg', title: 'Curtain Dubai 9' },
      { src: './src/assets/curtains/curtains_dubai10.jpeg', title: 'Curtain Dubai 10' },
      { src: './src/assets/curtains/curtains_dubai11.jpeg', title: 'Curtain Dubai 11' },
      { src: './src/assets/curtains/curtains_dubai12.jpeg', title: 'Curtain Dubai 12' },
      { src: './src/assets/curtains/curtains_dubai13.jpeg', title: 'Curtain Dubai 13' },
      { src: './src/assets/curtains/curtains_dubai14.jpeg', title: 'Curtain Dubai 14' },
      { src: './src/assets/curtains/curtains_dubai15.jpeg', title: 'Curtain Dubai 15' },
      { src: './src/assets/curtains/sheercurtains_dubai.jpeg', title: 'Sheer Curtains Dubai 1' },
      { src: './src/assets/curtains/curtains_dubai16.jpeg', title: 'Curtains Dubai 16' },
      { src: './src/assets/curtains/curtains_dubai17.jpeg', title: 'Curtains Dubai 17' },
      { src: './src/assets/curtains/wavecurtain.jpeg', title: 'Wave Curtain' },
      { src: './src/assets/curtains/wavecurtain_sheercurtain.jpeg', title: 'Wave Curtain,SheerCurtain' },
      { src: './src/assets/curtains/wave_sheercurtain2.jpeg', title: 'Wave Curtain,SheerCurtain 2' },
      // Add more images for the Nature category
    ],
    Sofa_fabrics: [
      { src: './src/assets/sofa_fabrics/Curtains_sofa-upholstery.jpeg', title: 'Curtains,Sofa Upholstery' },
      { src: './src/assets/sofa_fabrics/sofa-re-upholstry-1.jpeg', title: 'Sofa Re  Upholstery 1' },
      // { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-6xb-6GVydfB0Fa4HjisAh2TVu1QJXUcTA&usqp=CAU', title: 'Animal 2' },
      // Add more images for the Animals category
    ],
    Sofa_re_upholstery: [
      { src: './src/assets/sofa_re_upholstery/curtains_sofa_upholstery_1.jpeg', title: 'Curtain Sofa Upholstery 1' },
      { src: './src/assets/sofa_re_upholstery/sofa_upholstery_1.jpeg', title: 'Sofa Upholstery 1' },
      { src: './src/assets/sofa_re_upholstery/sofa_upholstery_2.jpeg', title: 'Sofa Upholstery 2' },
      { src: './src/assets/sofa_re_upholstery/sofa_upholstery_3.jpeg', title: 'Sofa Upholstery 3' },
      { src: './src/assets/sofa_re_upholstery/sofa_upholstery_4.jpeg', title: 'Sofa Upholstery 4' },
      { src: './src/assets/sofa_re_upholstery/sofa_upholstery5.jpeg', title: 'Sofa Upholstery 5' },
      { src: './src/assets/sofa_re_upholstery/sofa_upholstery_6.jpeg', title: 'Sofa Upholstery 6' },
      { src: './src/assets/sofa_re_upholstery/sofa_upholstery_7.jpeg', title: 'Sofa Upholstery 7' },
      { src: './src/assets/sofa_re_upholstery/sofa_upholstery_8.jpeg', title: 'Sofa Upholstery 8' },
      { src: './src/assets/sofa_re_upholstery/sofa_upholstery_9.jpeg', title: 'Sofa Upholstery 9' },
      { src: './src/assets/sofa_re_upholstery/sofa_upholstery_10.jpeg', title: 'Sofa Upholstery 10' },
      { src: './src/assets/sofa_re_upholstery/sofa_upholstery_11.jpeg', title: 'Sofa Upholstery 11' },
      { src: './src/assets/sofa_re_upholstery/sofa_upholstery_12.jpeg', title: 'Sofa Upholstery 12' },
      { src: './src/assets/sofa_re_upholstery/sofa_upholstery_dubai_1.jpeg', title: 'Sofa Upholstery Dubai 1' },
      { src: './src/assets/sofa_re_upholstery/sofa_upholstery_dubai_2.jpeg', title: 'Sofa Upholstery Dubai 2' },
      { src: './src/assets/sofa_re_upholstery/sofa_upholstery_dubai_3.jpeg', title: 'Sofa Upholstery Dubai 3' },
      { src: './src/assets/sofa_re_upholstery/arabic_majlis_upholstery_1.jpeg', title: 'Arabic Majlis Sofa Reupholstery 1' },
      { src: './src/assets/sofa_re_upholstery/arabic_majlis_sofa_upholstery_dubai_2.jpeg', title: 'Arabic Majlis Sofa Reupholstery Dubai 2' },
      // Add more images for the City category
    ],
    Blinds: [
      { src: './src/assets/blinds/blinds-1.jpeg', title: 'Blind 1' },
      { src: './src/assets/blinds/blinds-2.jpeg', title: 'Blind 2' },
      { src: './src/assets/blinds/blinds-3.jpeg', title: 'Blind 3' },
      { src: './src/assets/blinds/blinds-4.jpeg', title: 'Blind 4' },
      { src: './src/assets/blinds/blinds-dubai-1.jpeg', title: 'Blind Dubai 1' },
      { src: './src/assets/blinds/blinds-dubai-2.jpeg', title: 'Blind Dubai 2' },
      { src: './src/assets/blinds/duplex-blinds-dubai-2.jpeg', title: 'Duplex Blind Dubai 2' },
      { src: './src/assets/blinds/hospital-blinds-1.jpeg', title: 'Hospital Blind 1' },
      { src: './src/assets/blinds/hospital-blinds-2.jpeg', title: 'Hospital Blind 2' },
      { src: './src/assets/blinds/hospital-blinds-3.jpeg', title: 'Hospital Blind 3' },
      { src: './src/assets/blinds/hospital-blinds-4.jpeg', title: 'Hospital Blind 4' },
      { src: './src/assets/blinds/roman-blinds-dubai-1.jpeg', title: 'Roman Blind Dubai 1' },
      { src: './src/assets/blinds/roman-blinds-dubai-2.jpeg', title: 'Roman Blind Dubai 2' },
      { src: './src/assets/blinds/roman-blinds-dubai-3.jpeg', title: 'Roman Blind Dubai 3' },
      { src: './src/assets/blinds/roman-blinds-dubai-4.jpeg', title: 'Roman Blind Dubai 4' },
      { src: './src/assets/blinds/roman-blinds-dubai-5.jpeg', title: 'Roman Blind Dubai 5' },
      { src: './src/assets/blinds/roman-blinds-dubai-6.jpeg', title: 'Roman Blind Dubai 6' },
      { src: './src/assets/blinds/shutter-blinds-dubai-1.jpeg', title: 'Shutter Blind Dubai 1' },
      { src: './src/assets/blinds/venetian_blinds-1.jpeg', title: 'Venetian Blind 1' },
      // { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg', title: 'Food 2' },
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
