'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useForm, ValidationError } from '@formspree/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Toaster, toast } from "react-hot-toast";
import { RiInstagramFill } from 'react-icons/ri';
import { FaAmazon, FaFacebook} from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

// Fix Leaflet Marker Icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function Page() {
  const [state, handleSubmit] = useForm("mwppwrwy");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thank you for reaching out to us!", {
        duration: 4000,
        position: "top-center",
      });
    }
  }, [state.succeeded]);

  const officePosition = [28.5355, 77.391]; 

  return (
    <>
      <Toaster />
      <div className="Contact-Page w-screen h-screen relative">
        {/* Fixed Background Image */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <Image
            src="/contact.jpg"
            layout="fill"
            quality={100}
            objectFit="cover"
            alt="contact background"
          />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Contact Content */}
        <div className="Contact-section w-screen min-h-screen flex flex-col items-center justify-start pt-20">
          {/* Hero Section */}
          <section className="Contact-hero-section w-screen flex flex-col items-center justify-center text-center px-6 py-16 bg-transparent">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Contact Us</h1>
            <p className="text-base md:text-lg text-white max-w-2xl">
              We’d love to hear from you! Whether you have questions, feedback, or need assistance, feel free to get in touch with us. We’re here to help!
            </p>
          </section>

          {/* Main Contact Section */}
          <section className="Contact-main-section w-screen h-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 bg-white py-16 px-6">
            {/* Address Section */}
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <h2 className="font-bold text-xl text-black mb-4">Address</h2>
              <p className='text-gray-500'>Office Address: C-23, Sector 6, Noida, Uttar Pradesh - 201301</p>
              <p className='text-gray-500'>Home Address: 552-Mandakini Enclave, Alaknanda, New Delhi - 110019</p>
              <h2 className="font-bold text-xl text-black mt-6">Mobile Number</h2>
              <p className='text-gray-500'>+91 7701853700</p>

              {/* Map Integration */}
              <div className="mt-6">
                <h3 className="font-bold text-lg text-black mb-2">Locate Us</h3>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <MapContainer
                    center={officePosition}
                    zoom={13}
                    scrollWheelZoom={false}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={officePosition}>
                      <Popup>
                        C-23, Sector 6, Noida, Uttar Pradesh - 201301
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-1/3 flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 max-w-xl text-center mb-6">
                Fill out the form below or reach out to us directly through our contact information.
              </p>
              <form className="w-full max-w-lg flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  name='name'
                  id='name'
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                <input
                  type="email"
                  name='email'
                  id='email'
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                <textarea
                  placeholder="Your Message"
                  name='message'
                  rows="5"
                  id="message"
                  className="w-full px-4 py-2 text-gray-600 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-300 hover:text-black transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>

          {/* Additional Section */}
          <section className="Contact-additional-section w-screen flex flex-col items-center justify-center text-center px-6 py-16 bg-transparent">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">Stay Connected</h2>
            <p className="text-white max-w-2xl flex flex-col items-center">
              Follow us on our social media platforms to stay updated with the latest news and offers.
             
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
                    
            </p>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Page;
