// ImageModal.js

import React from 'react';

const ImageModal = ({ src, title, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
      <div className="max-w-2xl w-full">
        <img src={src} alt={title} className="w-full h-full object-contain cursor-pointer" onClick={onClose} />
      </div>
    </div>
  );
};

export default ImageModal;
