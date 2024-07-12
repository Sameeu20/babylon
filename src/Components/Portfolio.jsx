import React, { useState } from 'react';
import Header from './Header';
import bg from '../assets/portfolioimg.png';
import ImageGrid from './ImageGrid';
import Footer from'./Footer';
//curtain section
import curtain_1 from '../assets/curtains/curtain_1.jpg'
import curtain_2 from '../assets/curtains/curtain_2.jpeg'
import curtain_3 from '../assets/curtains/curtain_3.jpeg'
import curtain_4 from '../assets/curtains/curtain_4.jpeg'
import curtain_5 from '../assets/curtains/curtains_5.jpeg'
import curtains_6 from '../assets/curtains/curtains_6.jpeg'
import curtains_7 from '../assets/curtains/curtains_7.jpeg'
import curtains_8 from '../assets/curtains/curtains_8.jpeg'
import curtains_9 from '../assets/curtains/curtains_9.jpeg'
import curtains_10 from '../assets/curtains/curtains_10.jpeg'
import blinds_curtains_dubai from '../assets/curtains/blinds_curtains_dubai.jpeg'
import blinds_curtains_dubai2 from '../assets/curtains/blinds_curtains_dubai2.jpeg'
import curtains_11 from '../assets/curtains/curtains_11.jpeg'
import curtains_dubai3 from '../assets/curtains/curtains_dubai3.jpeg'
import curtains_dubai4 from '../assets/curtains/curtains_dubai4.jpeg'
import curtains_dubai5 from '../assets/curtains/curtains_dubai5.jpeg'
import curtains_dubai6 from '../assets/curtains/curtains_dubai6.jpeg'
import curtains_dubai7 from '../assets/curtains/curtains_dubai7.jpeg'
import curtains_dubai8 from '../assets/curtains/curtains_dubai8.jpeg'
import curtains_dubai9 from '../assets/curtains/curtains_dubai9.jpeg'
import curtains_dubai10 from '../assets/curtains/curtains_dubai10.jpeg'
import curtains_dubai11 from '../assets/curtains/curtains_dubai11.jpeg'
import curtains_dubai12 from '../assets/curtains/curtains_dubai12.jpeg'
import curtains_dubai13 from '../assets/curtains/curtains_dubai13.jpeg'
import curtains_dubai14 from '../assets/curtains/curtains_dubai14.jpeg'
import curtains_dubai15 from '../assets/curtains/curtains_dubai15.jpeg'
import sheercurtains_dubai from '../assets/curtains/sheercurtains_dubai.jpeg'
import curtains_dubai16 from  '../assets/curtains/curtains_dubai16.jpeg'
import curtains_dubai17 from '../assets/curtains/curtains_dubai17.jpeg'
import wavecurtain from '../assets/curtains/wavecurtain.jpeg'
import wavecurtain_sheercurtain from  '../assets/curtains/wavecurtain_sheercurtain.jpeg'
import  wavecurtain_sheercurtain2 from '../assets/curtains/wave_sheercurtain2.jpeg'

//Sofa_fabrics
import curtains_sofa_upholstery from '../assets/sofa_fabrics/Curtains_sofa-upholstery.jpeg'
import sofa_re_upholstry_1 from '../assets/sofa_fabrics/sofa-re-upholstry-1.jpeg'



//Sofa ReUplhostery
import curtains_sofa_upholstery_1 from '../assets/sofa_re_upholstery/curtains_sofa_upholstery_1.jpeg'
import sofa_upholstery_1 from '../assets/sofa_re_upholstery/sofa_upholstery_1.jpeg'
import sofa_upholstery_2 from '../assets/sofa_re_upholstery/sofa_upholstery_2.jpeg'
import sofa_upholstery_3 from '../assets/sofa_re_upholstery/sofa_upholstery_3.jpeg'
import sofa_upholstery_4 from '../assets/sofa_re_upholstery/sofa_upholstery_4.jpeg'
// import sofa_upholstery_5 from '../assets/sofa_re_upholstery/sofa_upholstery5.jpeg'
import sofa_upholstery_6 from '../assets/sofa_re_upholstery/sofa_upholstery_6.jpeg'
import sofa_upholstery_7 from '../assets/sofa_re_upholstery/sofa_upholstery_7.jpeg'
import sofa_upholstery_8 from '../assets/sofa_re_upholstery/sofa_upholstery_8.jpeg'
import sofa_upholstery_9 from '../assets/sofa_re_upholstery/sofa_upholstery_9.jpeg'
import sofa_upholstery_10 from '../assets/sofa_re_upholstery/sofa_upholstery_10.jpeg'
import sofa_upholstery_11 from '../assets/sofa_re_upholstery/sofa_upholstery_11.jpeg'
import sofa_upholstery_12 from '../assets/sofa_re_upholstery/sofa_upholstery_12.jpeg'
import sofa_upholstery_dubai_1 from '../assets/sofa_re_upholstery/sofa_upholstery_dubai_1.jpeg'
import sofa_upholstery_dubai_2 from '../assets/sofa_re_upholstery/sofa_upholstery_dubai_2.jpeg'
import sofa_upholstery_dubai_3 from '../assets/sofa_re_upholstery/sofa_upholstery_dubai_3.jpeg'
import arabic_majlis_upholstery_1 from '../assets/sofa_re_upholstery/arabic_majlis_upholstery_1.jpeg'
import arabic_majlis_sofa_upholstery_dubai_2 from '../assets/sofa_re_upholstery/arabic_majlis_upholstery_dubai_2.jpeg'

//Blind Assests
import blinds_1 from '../assets/blinds/blinds-1.jpeg'
import blinds_2 from '../assets/blinds/blinds-2.jpeg'
import blinds_3 from '../assets/blinds/blinds-3.jpeg'
import blinds_4 from '../assets/blinds/blinds-4.jpeg'
import blinds_dubai_1 from '../assets/blinds/blinds-dubai-1.jpeg'
import blinds_dubai_2 from '../assets/blinds/blinds-dubai-2.jpeg'
import duplex_blinds_dubai_2 from '../assets/blinds/duplex-blinds-dubai-2.jpeg'
import hospital_blinds_1 from '../assets/blinds/hospital-blinds-1.jpeg'
import hospital_blinds_2 from '../assets/blinds/hospital-blinds-2.jpeg'
import hospital_blinds_3 from '../assets/blinds/hospital-blinds-3.jpeg'
import hospital_blinds_4 from '../assets/blinds/hospital-blinds-4.jpeg'
import roman_blinds_dubai_1 from '../assets/blinds/roman-blinds-dubai-1.jpeg'
import roman_blinds_dubai_2 from '../assets/blinds/roman-blinds-dubai-2.jpeg'
import roman_blinds_dubai_3 from '../assets/blinds/roman-blinds-dubai-3.jpeg'
import roman_blinds_dubai_4 from '../assets/blinds/roman-blinds-dubai-4.jpeg'
import roman_blinds_dubai_5 from '../assets/blinds/roman-blinds-dubai-5.jpeg'
import roman_blinds_dubai_6 from '../assets/blinds/roman-blinds-dubai-6.jpeg'
import shutter_blinds_dubai_1 from '../assets/blinds/shutter-blinds-dubai-1.jpeg'
import venetian_blinds_1 from '../assets/blinds/venetian_blinds-1.jpeg'

//OutDoor Gazebo
import outdoor_1 from '../assets/outdoor_gazebo/outdoor-1.jpeg'

//Carpets_and_Wallpaper
import office_carpet_dubai_1 from '../assets/carpets_wallpaper/office-carpet-dubai-1.jpeg'
import office_carpet_dubai_2 from '../assets/carpets_wallpaper/office-carpet-dubai-2.jpeg'
import office_carpet_dubai_3 from '../assets/carpets_wallpaper/office-carpet-dubai-3.jpeg'
import office_carpet_dubai_4 from '../assets/carpets_wallpaper/office-carpet-dubai-4.jpeg'
import office_carpet_dubai_5 from '../assets/carpets_wallpaper/office-carpet-dubai-5.jpeg'
import office_carpet_dubai_6 from '../assets/carpets_wallpaper/office-carpet-dubai-6.jpeg'
import office_carpet_dubai_7 from '../assets/carpets_wallpaper/office-carpet-dubai-7.jpeg'
import carpets_1 from '../assets/carpets_wallpaper/carpets-1.jpeg'




const categories = ['Curtains', 'Sofa_fabrics', 'Sofa_re_upholstery', 'Blinds','Outdoor_gazeebo','Carpets_and_Wallpaper'];

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const images = {
    Curtains: [
      { src: curtain_1, title: 'Curtain 1' },
      { src: curtain_2, title: 'Curtain 2' },
      { src: curtain_3, title: 'Curtain 3' },
      { src: curtain_4, title: 'Curtain 4' },
      { src: curtain_5, title: 'Curtain 5' },
      { src: curtains_6, title: 'Curtain 6' },
      { src: curtains_7, title: 'Curtain 7' },
      { src: curtains_8, title: 'Curtain 8' },
      { src: curtains_9, title: 'Curtain 9' },
      { src: curtains_10, title: 'Curtain 10' },
      { src: blinds_curtains_dubai, title: 'Blinds Curtain Dubai' },
      { src: blinds_curtains_dubai2, title: 'Blinds Curtain Dubai 2' },
      { src: curtains_11, title: 'Curtains 11' },
      { src: curtains_dubai3, title: 'Curtain Dubai 3' },
      { src: curtains_dubai4, title: 'Curtain Dubai 4' },
      { src: curtains_dubai5, title: 'Curtain Dubai 5' },
      { src: curtains_dubai6, title: 'Curtain Dubai 6' },
      { src: curtains_dubai7, title: 'Curtain Dubai 7' },
      { src: curtains_dubai8, title: 'Curtain Dubai 8' },
      { src: curtains_dubai9, title: 'Curtain Dubai 9' },
      { src: curtains_dubai10, title: 'Curtain Dubai 10' },
      { src: curtains_dubai11, title: 'Curtain Dubai 11' },
      { src: curtains_dubai12, title: 'Curtain Dubai 12' },
      { src: curtains_dubai13, title: 'Curtain Dubai 13' },
      { src: curtains_dubai14, title: 'Curtain Dubai 14' },
      { src: curtains_dubai15, title: 'Curtain Dubai 15' },
      { src: sheercurtains_dubai, title: 'Sheer Curtains Dubai 1' },
      { src: curtains_dubai16, title: 'Curtains Dubai 16' },
      { src: curtains_dubai17, title: 'Curtains Dubai 17' },
      { src: wavecurtain, title: 'Wave Curtain' },
      { src:  wavecurtain_sheercurtain, title: 'Wave Curtain,SheerCurtain' },
      { src: wavecurtain_sheercurtain2, title: 'Wave Curtain,SheerCurtain 2' },
      // Add more images for the Nature category
    ],
    Sofa_fabrics: [
      { src: curtains_sofa_upholstery, title: 'Curtains,Sofa Upholstery' },
      { src: sofa_re_upholstry_1, title: 'Sofa Re  Upholstery 1' },

      // Add more images for the Sofa_fabrics category
    ],
    Sofa_re_upholstery: [
      { src: curtains_sofa_upholstery_1 , title: 'Curtain Sofa Upholstery 1' },
      { src: sofa_upholstery_1, title: 'Sofa Upholstery 1' },
      { src: sofa_upholstery_2, title: 'Sofa Upholstery 2' },
      { src: sofa_upholstery_3, title: 'Sofa Upholstery 3' },
      { src: sofa_upholstery_4, title: 'Sofa Upholstery 4' },
      { src: sofa_upholstery_6, title: 'Sofa Upholstery 5' },
      { src: sofa_upholstery_6, title: 'Sofa Upholstery 6' },
      { src: sofa_upholstery_7, title: 'Sofa Upholstery 7' },
      { src: sofa_upholstery_8, title: 'Sofa Upholstery 8' },
      { src: sofa_upholstery_9, title: 'Sofa Upholstery 9' },
      { src: sofa_upholstery_10, title: 'Sofa Upholstery 10' },
      { src: sofa_upholstery_11, title: 'Sofa Upholstery 11' },
      { src: sofa_upholstery_12, title: 'Sofa Upholstery 12' },
      { src: sofa_upholstery_dubai_1, title: 'Sofa Upholstery Dubai 1' },
      { src: sofa_upholstery_dubai_2, title: 'Sofa Upholstery Dubai 2' },
      { src: sofa_upholstery_dubai_3, title: 'Sofa Upholstery Dubai 3' },
      { src: arabic_majlis_upholstery_1, title: 'Arabic Majlis Sofa Reupholstery 1' },
      { src: arabic_majlis_sofa_upholstery_dubai_2 , title: 'Arabic Majlis Sofa Reupholstery Dubai 2' },
      // Add more images for the City category
    ],
    Blinds: [
      { src: blinds_1, title: 'Blind 1' },
      { src: blinds_2, title: 'Blind 2' },
      { src: blinds_3, title: 'Blind 3' },
      { src:  blinds_4, title: 'Blind 4' },
      { src: blinds_dubai_1, title: 'Blind Dubai 1' },
      { src: blinds_dubai_2, title: 'Blind Dubai 2' },
      { src: duplex_blinds_dubai_2, title: 'Duplex Blind Dubai 2' },
      { src: hospital_blinds_1, title: 'Hospital Blind 1' },
      { src: hospital_blinds_2, title: 'Hospital Blind 2' },
      { src: hospital_blinds_3, title: 'Hospital Blind 3' },
      { src: hospital_blinds_4, title: 'Hospital Blind 4' },
      { src: roman_blinds_dubai_1, title: 'Roman Blind Dubai 1' },
      { src: roman_blinds_dubai_2, title: 'Roman Blind Dubai 2' },
      { src: roman_blinds_dubai_3, title: 'Roman Blind Dubai 3' },
      { src: roman_blinds_dubai_4, title: 'Roman Blind Dubai 4' },
      { src: roman_blinds_dubai_5, title: 'Roman Blind Dubai 5' },
      { src: roman_blinds_dubai_6, title: 'Roman Blind Dubai 6' },
      { src: shutter_blinds_dubai_1, title: 'Shutter Blind Dubai 1' },
      { src: venetian_blinds_1, title: 'Venetian Blind 1' },
      // Add more images for the Food category
    ],
    Outdoor_gazeebo:[
      {src:outdoor_1 ,title:'Outdoor-1'}
    ],
    Carpets_and_Wallpaper:[
      {src:office_carpet_dubai_1 ,title:'Office Carpet Dubai-1'},
      {src:office_carpet_dubai_2 ,title:'Office Carpet Dubai-2'},
      {src:office_carpet_dubai_3,title:'Office Carpet Dubai-3'},
      {src:office_carpet_dubai_4,title:'Office Carpet Dubai-4'},
      {src:office_carpet_dubai_5,title:'Office Carpet Dubai-5'},
      {src:office_carpet_dubai_6,title:'Office Carpet Dubai-6'},
      {src:office_carpet_dubai_7,title:'Office Carpet Dubai-7'},
      {src:carpets_1 ,title:'Carpet-1'},

    ]
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <>
      <div className=' w-full mx-auto'>
        <Header />
        <img className='w-200 ' src={bg} alt="Background" />
      </div>

      {/* Uncomment this section if you need it */}
      <div className='flex flex-col items-center w-full h-auto mx-auto'>
        <div className='grid grid-rows-3 '>
        <div className='flex flex-wrap items-center justify-center md:justify-start w-full  border-none bg-gray-200 text-gray-500 rounded-lg mt-6 '>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`w-1/2 md:w-auto h-8 md:h-12 rounded-lg border-none px-2 my-1 md:my-0 md:mx-2 hover:bg-white ${currentCategory === category ? 'bg-white' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
           {category.replace(/_/g, ' ')}
          </button>
        ))}
        </div>

        </div>
        <div className='flex flex-col mt-'>
            <h2 className="text-2xl font-bold mt-0 mb-4">{currentCategory.replace(/_/g, ' ')} Images</h2>
        <ImageGrid images={images[currentCategory]} />

            </div>
           
      </div>
      <div className='mt-12'>
      <Footer/>
      </div>
      

         

    
    </>
  );
};

export default Portfolio;
