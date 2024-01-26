import React from 'react'
import bg from '../assets/about.png'
import Header from './Header';
import about from '../assets/aboutbg.png'

const Aboutpage = () => {
  return (
    <div className='h-[100vh] w-full mx-auto'>
     <div >
      <Header/>
      <img className = 'w-200 ' src={bg}/>
      </div>
      <div className="h-[100vh] w-full mx-auto grid grid-cols-2">
     <div className=" p-5 m-20 space-y-4 lg:pt-14">
  
        <h1 className=" px-8 font-bold text-4xl text-center md:text-start">
          About
        </h1>
        <p className="px-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          architecto quisquam delectus minima perferendis nulla quia nisi
          laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
          molestias omnis reprehenderit quae animi? Explicabo quasi accusamus
          laboriosam temporibus delectus, aut a? Quasi?
        </p>
    </div>
    <div className="py-5">
      <img className='mt-[30px]' src={about}/>
    </div>

   </div>
  < div className='h-[80vh] w-full flex justify-center'>
      <h1 className='font-bold text-3xl'>
        Why choosing US
      </h1>
    </div>
      </div>
  )
}

export default Aboutpage