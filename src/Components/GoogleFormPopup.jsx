import React, { useState, useEffect } from 'react';

const GoogleFormOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl">
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 mt-4 mr-4 text-black"
          >
            &times;
          </button>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf7Tl1rzQCul9sF1Dm7631508FhQI0bNIm6gU7JRvvfzL_Y4g/viewform?embedded=true"
            width="100%"
            height="400"
            className="sm:h-500 md:h-600 lg:h-700"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    )
  );
};

export default GoogleFormOverlay;
