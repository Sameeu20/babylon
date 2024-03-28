// ImageGrid.js

import React, { useState } from 'react';
import ImageModal from './ImageModal';

const ImageGrid = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 " >
      {images.map((image, index) => (
        <div key={index} className="grid gap-4 ">

          <img
            src={image.src}
            alt={image.title}
            className="w-full  object-cover cursor-pointer transform transition-transform hover:scale-110 rounded-lg aspect-square"
            onClick={() => openModal(image)}
          />
          <p className=" text-center " >{image.title}</p>
        </div>
      ))}

      {modalOpen && selectedImage && (
        <ImageModal src={selectedImage.src} title={selectedImage.title} onClose={closeModal} />
      )}
    </div>
  );
};

export default ImageGrid;
