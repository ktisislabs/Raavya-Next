import React from 'react';
import Image from 'next/image';
import TextLogo from '../../../public/text-logo.png';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaAmazon } from "react-icons/fa";
import Link from 'next/link';

function Footer() {
  return (
    <footer className="w-full bg-[#d6b0a0]  text-white absolute py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo Section */}
      <Link href={"/"}> <div className="flex flex-col items-center md:items-start">
          <Image
            src={TextLogo}
            alt="Raavya Logo"
            width={300}
            height={300}
            className=""
          />
        </div></Link> 

        {/* Quick Navigation */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Navigation</h2>
          <ul className="space-y-2">
         <Link href={"/Home"}>   <li className="text-sm hover:underline cursor-pointer">Home</li></Link>
         <Link href={"/About"}> <li className="text-sm hover:underline cursor-pointer">About</li></Link>
         <Link href={"/Products"}>   <li className="text-sm hover:underline cursor-pointer">Products</li></Link>
         <Link href={"/BulkOrder"}>  <li className="text-sm hover:underline cursor-pointer">Bulk Order</li></Link>
         <Link href={"/Contact"}>   <li className="text-sm hover:underline cursor-pointer">Contact</li></Link>
          </ul>
        </div>

        {/* Address & Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
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
              href="https://www.instagram.com/theraavya/"
              className="hover:text-gray-200 transition-all duration-200"
              aria-label="Instagram"
            >
              <RiInstagramFill size={20} />
            </a>
            <a
              href="http://facebook.com/theraavya"
              className="hover:text-gray-200 transition-all duration-200"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.amazon.in/stores/page/31BEBC02-A059-4270-A214-BBD72A454047"
              className="hover:text-gray-200 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaAmazon size={20} />
            </a>
            <a
              href="https://wa.me/917701853700"
              className="hover:text-gray-200 transition-all duration-200"
              aria-label="WhatsApp"
            >
              <IoLogoWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="border-t border-white w-full mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Raavya. All Rights Reserved.
        &copy; {new Date().getFullYear()} Design and Developed by KtisisLabs
      </div>
     
        
    
    </footer>
  );
}

export default Footer;
