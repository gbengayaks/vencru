import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Copyright = () => {
  return (
    <div className='border-t-2 border-gray-200 flex justify-between bg-blue-50 w-full p-7 mx-auto'>
      <div>
        &copy; 2023 Vencru Inc. All rights reserved
      </div>
      <div className='flex'>
        <FaInstagram className='mr-5' />
        <FaYoutube />
      </div>
      
    </div>
  )
}

export default Copyright