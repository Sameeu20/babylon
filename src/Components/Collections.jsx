import React from 'react'
import FurnitureItem from './FurnitureItem';
import sofa from '../assets/sofa.png'
import curtains from '../assets/curtains.png'
import bed from '../assets/bed.png'
import carpets from '../assets/carpets.png'


const Collections = () => {
  return (
    <div className="container mx-auto my-16">
      <h2 className="text-4xl font-semibold mb-16 text-center">Collections</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
