// src/components/FurnitureItem.jsx

import React from 'react';

const FurnitureItem = ({ imageName, label }) => {
  const labelStyle = {
    color: '#8D8D8D',
    fontFamily: 'Montserrat',
    fontSize: '1.5rem', // Responsive font size using rem
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '1.5', // Responsive line height
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src={imageName}
        alt={label}
        className="w-18 h-18 object-cover mb-2"
      />
      <p style={labelStyle} className="text-sm text-center">{label}</p>
    </div>
  );
};

export default FurnitureItem;
