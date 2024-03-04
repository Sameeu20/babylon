import React from 'react';

const TestimonialCard = ({ name, role, imageSrc, rating, content }) => {
  return (
    <div className="flex-shrink w-72 p-6 rounded-lg shadow-md bg-white mx-4 mb-8 -z-10">
      {/* Profile Picture */}
      <img
        src={imageSrc}
        alt="Profile"
        className="w-12 h-12 rounded-full mx-auto mb-4"
      />

      {/* Testimonial Content */}
      <p className="text-gray-800 text-base mb-4">{content}</p>

      {/* Star Rating */}
      <div className="flex justify-center mb-4">
        {Array.from({ length: rating }, (_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-yellow-500 fill-current mr-1"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 2L14.8 8l6.5.95-4.75 4.63L16 18l-5.2-1.13L6.8 18 8 12.53 3.5 8.95 10 8z"
            />
          </svg>
        ))}
        {Array.from({ length: 5 - rating }, (_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-gray-300 fill-current"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 2L14.8 8l6.5.95-4.75 4.63L16 18l-5.2-1.13L6.8 18 8 12.53 3.5 8.95 10 8z"
            />
          </svg>
        ))}
      </div>

      {/* User Info */}
      <div className="flex items-center">
        <p className="text-gray-600 text-sm font-semibold">{name}</p>
        <span className="mx-2">•</span>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
};

const TestimonialContainer = () => {
  return (
    <div className="flex justify-center w-full h-[60vh]">
      
      <TestimonialCard
        name="John Doe"
        role="Software Developer"
        imageSrc="path/to/profile-pic-1.jpg"
        rating={4}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
      />

      <TestimonialCard
        name="Jane Smith"
        role="UI/UX Designer"
        imageSrc="path/to/profile-pic-2.jpg"
        rating={5}
        content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />

      <TestimonialCard
        name="Bob Johnson"
        role="Product Manager"
        imageSrc="path/to/profile-pic-3.jpg"
        rating={3}
        content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

<TestimonialCard
        name="Bob Johnson"
        role="Product Manager"
        imageSrc="path/to/profile-pic-3.jpg"
        rating={3}
        content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <TestimonialCard
        name="Bob Johnson"
        role="Product Manager"
        imageSrc="path/to/profile-pic-3.jpg"
        rating={3}
        content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>
  );
};

export default TestimonialContainer;
