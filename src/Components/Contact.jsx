import React from "react";
import { IoMdMail, IoMdCall, IoMdPin } from "react-icons/io";
import { FaPhoneAlt, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import c from '../assets/circle.png'
const Contact = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-col lg:flex-row max-w-screen-xl bg-white dark:bg-dark shadow-lg rounded-md overflow-hidden">
      <div className="lg:w-1/3 p-5 bg-[#E0E0E0] dark:bg-[#f3c74e] rounded-l-md relative">
          <h2 className="text-xl font-bold text-dark dark:text-white mb-4">
            Contact Information
          </h2>
          <p className="text-base text-body-color text-gray-400 dark:text-dark-6 pr-3">
            Get connected with us to make your place aesthetic. Say something to start a live chat!
          </p>
          <div className="flex items-center space-x-4 mt-4 py-2">
            <IoMdMail className="text-[#E58411] text-xl" />
            <p className="text-base">
              info@example.com
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-2 py-2">
            <IoMdCall className="text-[#E58411] text-xl" />
            <p className="text-base">
              (+123) 456-7890
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-2 py-2">
            <IoMdPin className="text-[#E58411] text-xl" />
            <p className="text-base">
              123 Street, City
            </p>
          </div>
          <div className="absolute bottom-4 left-4 flex space-x-4 cursor-pointer">
            <div className="bg-black text-white rounded-full p-2 hover:text-[#E58411] ">
              <FaInstagram className="text-xl" />
            </div>
            <div className="bg-black text-white rounded-full p-2 hover:text-[#E58411]">
              <FaFacebook className=" text-xl" />
            </div>
            <div className="bg-black text-white rounded-full p-2 hover:text-[#E58411]">
              <FaTwitter className="text-xl" />
            </div>
            {/* Add more social media icons and links if needed */}
          </div>
          <img src={c} className="w-[150px] ml-[209px] mb-[-25px]"/>
        </div>

        {/* Right Side */}
        <div className="lg:w-2/3 p-4">
  
          <form className="grid grid-cols-1 gap-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="text-xs font-medium text-gray-600">
                  First Name
                </label>
                <div className="w-full border-b border-gray-600">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="py-2 px-4 w-full bg-transparent border-none outline-none"
                    placeholder="first name"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="text-xs font-medium text-gray-600">
                  Last Name
                </label>
                <div className="w-full border-b border-gray-600">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="py-2 px-4 w-full bg-transparent border-none outline-none"
                    placeholder="last name"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="email" className="text-xs font-medium text-gray-600">
                  Email
                </label>
                <div className="w-full border-b border-gray-600">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="py-2 px-4 w-full bg-transparent border-none outline-none"
                    placeholder="mail id"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label htmlFor="phone" className="text-xs font-medium text-gray-600">
                  Phone
                </label>
                <div className="w-full border-b border-gray-600">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="py-2 px-4 w-full bg-transparent border-none outline-none"
                    placeholder="Phone number"
                  />
                </div>
              </div>
            </div>
            <div>
  <label htmlFor="message" className="text-xs font-medium text-gray-600">
    Your Message
  </label>
  <div >
    <div >
      <textarea
        rows="4"
        id="message"
        name="message"
        className="py-2 px--1 w-full bg-transparent border-b border-gray-600 outline-none resize-none"
        placeholder="Write your message here"
      />
    </div>
  </div>
</div>
            <div className="flex space-x-4  outline-none">
               
              <button
                type="submit"
                className="w-[200px] bg-[#E58411]  border-none text-white font-bold rounded-md py-3 transition hover:bg-opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
