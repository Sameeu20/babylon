// Card.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({ heading, description, imageUrl, starRating, nowAvailable, price, oldPrice }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/4 p-4">
      <img src={imageUrl} alt={heading} className="w-full h-auto sm:w-64 sm:h-auto md:w-80 md:h-auto lg:w-96 lg:h-auto xl:w-96 xl:h-auto" alt="Your Alt Text" />
      <h2 className="text-gray-500 font-inter text-base md:text-sm lg:text-base xl:text-base">{heading}</h2>
      <p className="text-blue-900 font-inter font-semibold text-lg md:text-base lg:text-lg xl:text-lg capitalize">{description}</p>
      <div className="flex items-center mb-2">
        <div className="flex">
          {Array.from({ length: starRating }, (_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} className="h-5 w-5 text-yellow-500" />
          ))}
        </div>
        {nowAvailable && (
          <div className="ml-2">
            <p className="text-green-500 ml-2">Now Available</p>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <p className="text-lg font-bold">${price}</p>
        {oldPrice && (
          <p className="ml-2 text-gray-500 line-through">${oldPrice}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
