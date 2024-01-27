import React from 'react'
import Header from './Header'
import bg from '../assets/portfolioimg.png'

const Portfolio = () => {
  return (
    <div className='h-[100vh] w-full mx-auto'>
     <div >
      <Header/>
      <img className = 'w-200 ' src={bg}/>
      </div>
    </div>
  )
}

export default Portfolio