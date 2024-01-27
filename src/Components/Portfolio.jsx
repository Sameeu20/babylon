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
      <div className='grid grid-cols-3 mt-32 ml-14 gap-6'>
        <div className='col-span-1.75'>
          <h3 className='text-black font-montserrat text-6xl font-semibold leading-[130%] tracking-tighter uppercase'>IMAGES</h3>
          <p className='text-black text-justify font-montserrat text-base font-normal leading-[185%] w-96'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          Curabitur temulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum o.            
        </p>
        <div className='mt-2'> 
        <ImageWithTextOverlay
        src={curtainImagegrid}
        height="100"
        width="110"
        text="CURTAINS"
      />
        </div>
        
        </div>
        <div className="col row-span-1 col-start-2 mt-12 ">
          <ImageWithTextOverlay
          src={curtainImagegridLong}
          height="200"
          width="60"
          text="CURTAINS"
        />
      </div>
      <div className="col row-span-1 mt-12">
          <ImageWithTextOverlay
          src={curtainImagegridLong}
          height="200"
          width="60"
          text="CURTAINS"
        />
      </div>


      </div>

    </div>
  )
}

export default Portfolio