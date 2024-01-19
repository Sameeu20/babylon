// CardCarousel.jsx
import React, { useState } from 'react';
import Card from './Card';

const CardCarousel = () => {
  // Dummy data for cards
  const cards = [
    {
      id: 1,
      heading: 'Image 1',
      description: 'Description for Image 1',
      imageUrl: 'path/to/image1.jpg',
      starRating: 4,
      nowAvailable: true,
      price: 49.99,
      oldPrice: 69.99,
    },
    {
      id: 2,
      heading: 'Image 2',
      description: 'Description for Image 2',
      imageUrl: 'path/to/image2.jpg',
      starRating: 5,
      nowAvailable: false,
      price: 39.99,
      oldPrice: 59.99,
    },
    {
      id: 3,
      heading: 'Image 3',
      description: 'Description for Image 3',
      imageUrl: 'path/to/image2.jpg',
      starRating: 5,
      nowAvailable: false,
      price: 39.99,
      oldPrice: 59.99,
    },
    {
      id: 4,
      heading: 'Image 4',
      description: 'Description for Image 4',
      imageUrl: 'path/to/image2.jpg',
      starRating: 5,
      nowAvailable: false,
      price: 39.99,
      oldPrice: 59.99,
    },
    {
      id: 5,
      heading: 'Image 5',
      description: 'Description for Image 5',
      imageUrl: 'path/to/image2.jpg',
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

  // Event handler for clicking the next button
  const handleNextClick = () => {
    if (startIdx + visibleCardsCount < cards.length) {
      setStartIdx(startIdx + 1);
    }
  };

  // Event handler for clicking the previous button
  const handlePrevClick = () => {
    if (startIdx > 0) {
      setStartIdx(startIdx - 1);
    }
  };

  return (
    <div className="w-1/2 p-6">
      <div className="flex justify-between mb-4 ">
        <button className="text-gray-600" onClick={handlePrevClick}>
          &lt;
        </button>
        <button className="text-gray-600" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
      <div className="flex flex-wrap  -mx-4 gap-11">
        {cards.slice(startIdx, startIdx + visibleCardsCount).map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
