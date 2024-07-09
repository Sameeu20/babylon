import React from 'react';

const GoogleFormPopup = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="google-form-popup">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSduoL5kKDsM9xLaWIPDp7TtFYXTi-WuWLM9huidcSazEwnfxg/viewform?embedded=true"
          width="640"
          height="1006"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default GoogleFormPopup;
