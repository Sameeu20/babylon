import React from 'react';

const ImageWithTextOverlay = ({ src, height, width, text }) => {
  return (
    <div className="relative">
      {/* Image */}
      <img
        src={src}
        alt="Image Alt Text"
        className={`w-${width} h-${height} object-cover rounded-md `}
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-end justify-center">
        <p className="text-white text-2xl font-bold">{text}</p>
      </div>
    </div>
  );
};

export default ImageWithTextOverlay;
