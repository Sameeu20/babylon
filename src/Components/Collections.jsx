import React, { useEffect, useRef } from 'react'
import FurnitureItem from './FurnitureItem';
import sofa from '../assets/sofa.png'
import curtains from '../assets/curtains.png'
import bed from '../assets/bed.png'
import carpets from '../assets/carpets.png'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Collections = () => {
  const Cref=useRef(null)

  useEffect(()=>{
  const el=Cref.current;
  gsap.fromTo(el,{x:-100},{x:150,duration:10,scrollTrigger:{
    trigger:el,
    scrub:1
  }})
  },[])

  return (
    <div className="container mx-auto my-16">

      <h2 className="text-4xl font-semibold mb-16 text-center">Collections</h2>
  
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  " ref={Cref}>
        <FurnitureItem imageName={sofa} label="Sofa" />
        <FurnitureItem imageName={curtains} label="Curtains" />
        <FurnitureItem imageName={bed} label="Bed" />
        <FurnitureItem imageName={carpets} label="Carpets" />
        {/* Add more similar blocks for each furniture item */}
      </div>
    </div>
  )
}

export default Collections
