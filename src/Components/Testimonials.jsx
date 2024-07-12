import React from 'react';

const TestimonialCard = ({ name, role, imageSrc, rating, content }) => {
  return (
    <div className="flex-shrink w-72 p-6 rounded-lg shadow-md bg-white mx-4 mb-8 -z-10">
      {/* Profile Picture */}
      {/* <img
        src={imageSrc}
        alt="Profile"
        className="w-12 h-12 rounded-full mx-auto mb-4"
      /> */}

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
        name="Samuel Richard "
        role="Interior Designer"
        imageSrc="path/to/profile-pic-1.jpg"
        rating={4}
        content="Absolutely thrilled with how our space turned out! The designer captured exactly what we wanted and added their creative touch. Highly recommend!"
      />

      <TestimonialCard
        name="Jane Smith"
        role=""
        imageSrc="path/to/profile-pic-2.jpg"
        rating={5}
        content="The transformation is incredible! Our home feels so much more spacious and inviting. Thank you for your expertise and attention to detail."

      />

      <TestimonialCard
        name="Ahmad Hamza"
        role="Real Estate"
        imageSrc="path/to/profile-pic-3.jpg"
        rating={5}
        content="From concept to execution, the designer was professional and responsive. They really understood our style and brought it to life beautifully."

      />

<TestimonialCard  
        name="Phil Johnson"
        role="Product Manager"
        imageSrc="path/to/profile-pic-3.jpg"
        rating={5}
        content="Working with  Babylon was a fantastic experience. They were organized, communicated well, and delivered beyond our expectations. Can't wait to show off our new space!"
      />
      <TestimonialCard
        name="Jefferson"
        role=""
        imageSrc="path/to/profile-pic-3.jpg"
        rating={4}
        content="We're so glad we chose Babylon for our project. They managed to blend functionality with elegance seamlessly. It's like a dream come true."

      />
    </div>
  );
};

export default TestimonialContainer;
