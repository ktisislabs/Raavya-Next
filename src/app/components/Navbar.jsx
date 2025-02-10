'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLogo from '../../../public/text-logo.png';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaAngleDown } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="Navbar-container absolute z-20 flex items-center justify-center w-screen p-2 bg-[#d6b0a0] ">
      {/* Logo and Links */}
      

      {/* Links for larger screens */}
      <div className="hidden md:flex items-center gap-12">
        <Link href="/">
          <p className="font-poppins text-white text-sm font-medium">Home</p>
        </Link>
        <Link href="/About">
          <p className="font-poppins text-white text-sm font-medium">About</p>
        </Link>
        <Link href="/Products">
          <p className="font-poppins text-white text-sm font-medium">Products</p>
        </Link>
        <Link href="/BulkOrder">
          <p className="font-poppins text-white text-sm font-medium">Bulk Order</p>
        </Link>
        <Link href="/Contact">
          <p className="font-poppins text-white text-sm font-medium">Contact</p>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden ">
        <button
          onClick={toggleMenu}
          className="focus:outline-none text-white text-3xl font-bold"
        >
        <FaAngleDown />
        </button>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 bottom-0 h-full w-full bg-[#d6b0a0] shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center p-6 space-y-6">
          <button
            onClick={toggleMenu}
            className="self-end text-white text-2xl hover:underline cursor-pointer focus:outline-none"
          >
            ✖
          </button>
          <Link href="/">
            <p
              onClick={toggleMenu}
              className="font-poppins text-white text-2xl hover:underline cursor-pointer font-medium"
            >
              Home
            </p>
          </Link>
          <Link href="/About">
            <p
              onClick={toggleMenu}
              className="font-poppins text-white text-2xl hover:underline cursor-pointer font-medium"
            >
              About
            </p>
          </Link>
          <Link href="/Products">
            <p
              onClick={toggleMenu}
              className="font-poppins text-white text-2xl hover:underline cursor-pointer font-medium"
            >
              Products
            </p>
          </Link>
          <Link href="/BulkOrder">
            <p
              onClick={toggleMenu}
              className="font-poppins text-white text-2xl hover:underline cursor-pointer font-medium"
            >
              Bulk Order
            </p>
          </Link>
          <Link href="/Contact">
            <p
              onClick={toggleMenu}
              className="font-poppins text-white text-2xl hover:underline cursor-pointer  font-medium"
            >
              Contact
            </p>
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
        <Link href="/">
          <Image src={MainLogo} alt="Logo" width={300} height={40} />
        </Link>
      </div>
      <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <a
                    href="#"
                    className="hover:text-gray-200 transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <RiInstagramFill size={20} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-gray-200 transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-gray-200 transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-gray-200 transition-all duration-200"
                    aria-label="WhatsApp"
                  >
                    <IoLogoWhatsapp size={20} />
                  </a>
                </div>
                <div className="border-t border-white mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Raavya. All Rights Reserved.    &copy; {new Date().getFullYear()} Raavya. All Rights Reserved.
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
