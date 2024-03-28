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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 grid-flow-col-dense">
      {images.map((image, index) => (
        <div key={index} className="relative group">
        <img
  src={image.src}
  alt={image.title}
  class="w-full h-auto object-cover cursor-pointer rounded-lg aspect-square sm:w-auto"
  onClick={() => openModal(image)}
/>

        <p className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-white bg-opacity-75 p-1 rounded text-sm sm:text-base">{image.title}</p>
      </div>
      
      ))}

      {modalOpen && selectedImage && (
        <ImageModal src={selectedImage.src} title={selectedImage.title} onClose={closeModal} />
      )}
    </div>
  );
};

export default ImageGrid;
