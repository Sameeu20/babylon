// Card.jsx
import React from 'react';

const Card = ({ heading, description, imageUrl, starRating, nowAvailable, price, oldPrice }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
      <img src={imageUrl} alt={heading} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-xl font-semibold mb-1">{heading}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex items-center mb-2">
        <div className="flex">
          {Array.from({ length: starRating }, (_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 0a1 1 0 0 1 1 1v7.18l1.094-.547a1 1 0 0 1 1.812.902l-1 9a1 1 0 0 1-1.238.98l-6-1.5a1 1 0 0 1-.633-.492L2 9.165V1a1 1 0 0 1 1-1z"
              />
            </svg>
          ))}
        </div>
        {nowAvailable && (
          <div className="ml-2 border-t border-orange-500">
            <p className="text-orange-500 ml-2">Now Available</p>
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
