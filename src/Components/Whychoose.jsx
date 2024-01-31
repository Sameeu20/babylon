// Card.jsx
import React from 'react';

const Whychoose = ({ heading, description }) => {
  return (
    <div className="bg-white p-6 m-4 rounded ">
      <h2 className="text-gray-700 font-montserrat text-2xl font-semibold">{heading}</h2>
      <p className="text-gray-700 font-montserrat text-base font-normal">{description}</p>
    </div>
  );
};

export default Whychoose;
