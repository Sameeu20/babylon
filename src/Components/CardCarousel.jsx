// CardCarousel.jsx
import React, { useState } from 'react';
import Card from './Card';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';


const CardCarousel = () => {
  // Dummy data for cards
  const cards = [
    {
      id: 1,
      heading: 'Curtain',
      description: 'Wave curtain withshear curtain',
      imageUrl:carousel1,
      starRating: 4,
      nowAvailable: true,
      price: 49.99,
      oldPrice: 69.99,
    },
    {
      id: 2,
      heading: 'Curtain',
      description: 'Wave curtain withshear curtain',
      imageUrl: carousel2,
      starRating: 5,
      nowAvailable: true,
      price: 39.99,
      oldPrice: 59.99,
    },
    {
      id: 3,
      heading: 'Curtain',
      description: 'Wave curtain withshear curtain',
      imageUrl: carousel3,
      starRating: 5,
      nowAvailable: false,
      price: 39.99,
      oldPrice: 59.99,
    },
    {
      id: 4,
      heading: 'Curtain',
      description: 'Description for Image 4',
      imageUrl: carousel1,
      starRating: 5,
      nowAvailable: false,
      price: 39.99,
      oldPrice: 59.99,
    },
    {
      id: 5,
      heading: 'Curtain',
      description: 'Description for Image 5',
      imageUrl:carousel2,
      starRating: 5,
      nowAvailable: false,
      price: 39.99,
      oldPrice: 59.99,
    },
    // Add more cards as needed
  ];

  // State to track the index of the first visible card
  const [startIdx, setStartIdx] = useState(0);

  // Number of visible cards in a row
  const visibleCardsCount = 3;

  const totalCards = cards.length;

  // Event handler for clicking the next button
  const handleNextClick = () => {
    setStartIdx((startIdx + 1) % totalCards);
  };

  // Event handler for clicking the previous button
  const handlePrevClick = () => {
    setStartIdx((startIdx - 1 + totalCards) % totalCards);
  };

  return (
    <div className="w-2/3 p-4">
      <div className="flex gap-2 mb-4 ">
        <button className="text-gray-600" onClick={handlePrevClick}>
          &lt;
        </button>
        <button className="text-gray-600" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
      <div className="flex flex-row justify-center w-full gap-8 ">
        {cards.slice(startIdx, startIdx + visibleCardsCount).map((card) => (
          <Card key={card.id}  {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
