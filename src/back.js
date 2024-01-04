import React from 'react';

const BusinessDetails = () => {
  return (
    <div className='p-4 md:p-7 bg-blue-50 flex flex-col md:flex-row justify-between'>
      <div className='md:mt-5 md:w-1/2'>
        <div className='text-2xl md:text-5xl font-semibold my-4 md:my-8'>
          Free receipt maker for your small business
        </div>
        <div className='text-sm md:text-lg'>
          Create and send professional receipts to your customers with our free receipt
          generator. Save time managing your small business. Enter your customer
          information, download or print the receipt now. No email required
        </div>
        <button className="bg-blue-700 p-3 px-4 my-4 md:my-7 text-white rounded-lg">
          <span className="p-2">Generate a receipt</span>
        </button>
      </div>
      <div className='md:mt-8 md:w-1/2'>
        <img src='Receipt-1.webp' className='object-fill w-full' alt='Receipt' />
      </div>
    </div>
  );
};

export default BusinessDetails;


import React from "react";

const TopBar = () => {
  return (
    <div className="p-4 md:p-7 text-lg flex flex-col md:flex-row items-center">
      <div className="flex mb-4 md:mr-12 md:mb-0">
        <img src="https://b6efee71.flyingcdn.com/wp-content/uploads/2022/07/Logo-Regular.png" alt="Logo" className="w-22 h-12 mr-2 text-lg" />
      </div>

      {/* Navigation */}
      <div className="flex flex-col md:flex-row text-gray-500 justify-center mb-4 md:mb-0">
        <a href="#" className="mb-2 md:mb-0 md:mr-10 text-lg">Features</a>
        <a href="#" className="mb-2 md:mb-0 md:mr-10 text-lg">Industries</a>
        <a href="#" className="mb-2 md:mb-0 md:mr-10 text-lg">Download</a>
        <a href="#" className="mb-2 md:mb-0 md:mr-10 text-lg">Resources</a>
        <a href="#" className="mb-2 md:mb-0 md:mr-10 text-lg">Pricing</a>
      </div>
      <div className="flex flex-col md:flex-row mt-3">
        <a href="#" className="mb-2 md:mb-0 md:mr-7 text-lg">Book a Call</a>
        <span className="hidden md:inline">|</span>
        <a href="#" className="mb-2 md:mb-0 mx-4 md:mx-7 text-lg">Login</a>
        <button className="bg-blue-600 p-2 text-white rounded-lg"><span className="p-2">Try Vencru Free</span></button>
      </div>
    </div>
  );
};

export default TopBar;


import React from "react";

const TopBar = () => {
  return (
    <div className="p-7 text-lg flex items-center">
      <div className="flex mr-12">
        <img src="https://b6efee71.flyingcdn.com/wp-content/uploads/2022/07/Logo-Regular.png" alt="Logo" className="w-22 h-12 mr-2 text-lg" />
      </div>

      <div className="flex text-gray-500 justify-center mr-20">
        <a href="#" className="mr-10 text-lg">Features</a>
        <a href="#" className="mr-10 text-lg">Industries</a>
        <a href="#" className="mr-10 text-lg">Download</a>
        <a href="#" className="mr-10 text-lg">Resources</a>
        <a href="#" className="mr-10 text-lg">Pricing</a>
      </div>
      <div className="flex mt-3">
        <a href="#" className="mr-7 text-lg">Book a Call</a>
        <span className="">|</span>
        <a href="#" className="mx-7 text-lg">Login</a>
        <button className="bg-blue-600 p-2 text-white rounded-lg"><span className="p-2">Try Vencru Free</span></button>
      </div>
    </div>
  );
};

export default TopBar;



