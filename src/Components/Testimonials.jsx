import React from 'react'
import Testimonialcards from './Testimonialcards'
import cardData from './cardData'






const Testimonials = () => {
  return (
    <div className='h-[100vh] mx-auto w-full '>
        <div className='flex  justify-center'>
            <div className='flex flex-col items-center py-4'>
            <h1 className='py-4 text-xl text-[#E58411]'>Testimonials</h1>
            <h1 className='text-4xl font-bold'>Our Client Reviews</h1>
            <div className='grid grid-cols-3 gap-8'>
            <Testimonialcards details={cardData}/>
            
            </div>
            
                </div>
                
               
            </div>
            
            </div>

    

            
            
            
      
  )
}

export default Testimonials