import React from 'react'
import Header from './Header'
import bg from '../assets/portfolioimg.png'
import ImageWithTextOverlay from './ImageWithTextOverlay';
import curtainImagegrid from '../assets/curtain_imagegrid.png'
import curtainImagegridLong from '../assets/curtain_imagegrid2.png'

const Portfolio = () => {
  return (
    <div className='h-[100vh] w-full mx-auto'>
     <div >
      <Header/>
      <img className = 'w-200 ' src={bg}/>
      </div>

      <div className='grid grid-cols-2 mt-10 ml-20 '>

        <div
        className=''>
          <div className='flex flex-row w-1/3'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Video
           </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Images
        </button>
          </div>

            <div className='mt-10'>
              <h1 className='text-black font-montserrat text-6xl font-semibold'>IMAGES</h1>
              <p className='text-gray-900 text-justify font-montserrat text-base font-normal mt-2 w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur deleniti ab sequi cumque quod neque ducimus cupiditate beatae temporibus vitae, assumenda dolor quidem dolore placeat illo! Sunt vero dolorum dolorem unde. Molestias ipsam atque maxime nesciunt harum, fugiat nobis ipsa, ducimus reprehenderit, inventore sit dignissimos officiis obcaecati dolorum. Reiciendis neque officiis numquam doloremque? Dolorum cum quae illum aliquid veritatis magni reprehenderit voluptates laborum nulla harum aperiam possimus facere molestias voluptatibus perspiciatis enim, dolor quasi dicta maiores soluta cupiditate eius? Vitae itaque qui sequi enim similique dicta assumenda voluptate recusandae consequuntur, aliquam odio aut, nostrum architecto officiis odit voluptates consectetur blanditiis distinctio veritatis cumque repellat. Ut repellendus atque fugit repudiandae vitae voluptatem illum delectus est commodi impedit! Asperiores aut, incidunt repellendus, laborum obcaecati nihil, excepturi fugit tenetur quos       
          
              </p>
            <div className='mt-10'>
              <ImageWithTextOverlay
              src={curtainImagegrid}
              text={"Curtain"}
              />
            </div>
            </div>



        

        </div>

        <div className='flex flex-col gap-2 mr-10'>
          <div className='flex flex-row rounded-full bg-gray-300  justify-center items-center gap-8 w-3/4 ml-10'>
          <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full">
            Curtains
            </button>
          <button className=" bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full">
            Beds
            </button>
            <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full">
            Sofa
            </button>
            <button className=" hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full">
            Lamps
            </button>
            </div>
            <div className='flex flex-row rounded-full bg-gray-300  justify-center items-center gap-8 w-3/4 ml-10'>
          <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full border-none">
            Curtains
            </button>
          <button className=" bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full">
            Beds
            </button>
            <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full">
            Sofa
            </button>
            <button className=" hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full">
            Lamps
            </button>
            </div>
            <div className='flex flex-row rounded-full bg-gray-300  justify-center items-center gap-8 w-3/4 ml-10'>
          <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full border-none">
            Curtains
            </button>
          <button className=" bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full">
            Beds
            </button>
            <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full">
            Sofa
            </button>
            <button className=" hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full">
            Lamps
            </button>
            </div>
          <div className='flex flex-row gap-3 mt-10'>
            <div className=''>
              <ImageWithTextOverlay
              src={curtainImagegridLong}
              text={"Curtains"}
              />
              </div>
            <div>
            <ImageWithTextOverlay
              src={curtainImagegridLong}
              text={"Curtains"}
              />
            </div>

          </div>

        </div>

        <div className='flex flex-row mt-8 gap-2 h-3/4'>
          <ImageWithTextOverlay
          src={curtainImagegridLong}
          text={"CURTAIN"}
          />
                    <ImageWithTextOverlay
          src={curtainImagegridLong}
          text={"CURTAIN"}
          />


        </div>
        <div className='flex flex-col gap-2 ml-8 mt-8'>
        <div className="h-1/2">
          <ImageWithTextOverlay
          src={curtainImagegrid}
          text={"CURTAIN"}
          />
          </div>
        <div className="">
        <ImageWithTextOverlay
          src={curtainImagegrid}
          text={"CURTAIN"}
          />

        </div>

        </div>
        

     
      </div>
      <div className='flex flex-row mt-4 ml-11 gap-6'>
          <div className=''>
          <ImageWithTextOverlay
          src={curtainImagegrid}
          text={"CURTRAIN"}
          />
          </div>
          <div className='col-span-4'>
          <ImageWithTextOverlay
          src={curtainImagegrid}
          text={"CURTRAIN"}
          />


          </div>

        </div>

      </div>

  
  )
}

export default Portfolio