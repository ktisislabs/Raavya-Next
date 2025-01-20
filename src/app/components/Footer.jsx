import React from 'react';
import Image from 'next/image';
import TextLogo from '../../../public/text-logo.png';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

function Footer() {
  return (
    <footer className="w-full bg-[#bd9c8e] text-white absolute py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src={TextLogo}
            alt="Raavya Logo"
            width={300}
            height={300}
            className=""
          />
        </div>

        {/* Quick Navigation */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Navigation</h2>
          <ul className="space-y-2">
            <li className="text-lg hover:underline cursor-pointer">Home</li>
            <li className="text-lg hover:underline cursor-pointer">About</li>
            <li className="text-lg hover:underline cursor-pointer">Products</li>
            <li className="text-lg hover:underline cursor-pointer">Bulk Order</li>
            <li className="text-lg hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Address & Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">
            <strong>Home Address:</strong> 552-Mandakini Enclave, Alaknanda, New Delhi - 110019
          </p>
          <p className="mb-2">
            <strong>Office Address:</strong> C-23, Sector 6, Noida, Uttar Pradesh - 201301
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +91 7701853700
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-gray-200 transition-all duration-200"
              aria-label="Instagram"
            >
              <RiInstagramFill size={24} />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-all duration-200"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-all duration-200"
              aria-label="WhatsApp"
            >
              <IoLogoWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="border-t border-white mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Raavya. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
