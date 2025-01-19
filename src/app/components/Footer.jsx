import React from 'react';
import TextLogo from '../../../public/Mainlogo.png';
import Image from 'next/image';

function Footer() {
  return (
    <div className="w-screen relative bg-[#bd9c8e] h-auto py-10 px-6 flex flex-col lg:flex-row items-center lg:items-start justify-evenly text-white space-y-10 lg:space-y-0">
      {/* Quick Navigation Section */}
      <div className="flex flex-col items-center lg:items-start">
        <ul className="text-center lg:text-left">
          <li className="text-2xl font-semibold mb-4">Quick Navigation</li>
          <li className="text-lg hover:underline cursor-pointer mb-2">Home</li>
          <li className="text-lg hover:underline cursor-pointer mb-2">About</li>
          <li className="text-lg hover:underline cursor-pointer mb-2">Products</li>
          <li className="text-lg hover:underline cursor-pointer mb-2">Bulk Order</li>
          <li className="text-lg hover:underline cursor-pointer mb-2">Contact</li>
        </ul>
      </div>

      {/* Vertical Line (Hidden on Mobile) */}
      <div className="hidden lg:block h-60 border-l border-white"></div>

      {/* Image Section */}
      <div className="flex items-center justify-center">
        <Image src={TextLogo} alt="Raavya-Logo" width={250} height={250} className="" />
      </div>

      {/* Vertical Line (Hidden on Mobile) */}
      <div className="hidden lg:block h-60 border-l border-white"></div>

      {/* Address and Contact Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <p className="mb-2 text-sm lg:text-base">Home Address: 12345 Delhi</p>
        <p className="mb-2 text-sm lg:text-base">Office Address: 12345</p>
        <p className="mb-2 text-sm lg:text-base">Phone Number: +91 98765134</p>
        <p className="font-bold mt-4 text-sm lg:text-base">
          Follow Us: 
          <span className="hover:underline cursor-pointer mx-1">Instagram</span> | 
          <span className="hover:underline cursor-pointer mx-1">LinkedIn</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
