'use client'

import React, { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Footer from '../components/Footer';
import { useForm, ValidationError } from '@formspree/react';
import { Toaster, toast } from "react-hot-toast";
import Head from 'next/head';




function Page() {
  const [state, handleSubmit] = useForm("xyzzbnle");


  useEffect(() => {
      if (state.succeeded) {
        toast.success("Thank you for reaching out to us!", {
          duration: 4000,
          position: "top-center",
        });
      }
    }, [state.succeeded]);
  return (
    <>
    <Head>
        <title>TheRaavya : Bulk Order</title>
        <meta name="description" content="Explore our exclusive range of home decor and furniture at TheRaavya." />
      </Head>
    <Toaster/>
      <div className="Contact-Page w-screen min-h-screen relative flex flex-col">
        {/* Fixed Background Image */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <Image
            src="/bulk.jpg"
            layout="fill"
            quality={100}
            objectFit="cover"
            alt="contact background"
          />
        </div>

        {/* Navbar */}
        <Navbar className="z-10" />

        {/* Form Section */}
        <div className="container mx-auto px-4 py-16 relative z-0 flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-12 max-w-xl w-full">
            <h1 className="text-4xl font-bold text-white mb-4">Bulk Order</h1>
            <p className="text-lg text-gray-200">
              Have a bulk order or inquiry? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white text-black rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-3xl mx-auto">
            <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block font-medium mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 border focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 border focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 border focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Order Details */}
              <div>
                <label className="block font-medium mb-2" htmlFor="orderDetails">
                  Order Details
                </label>
                <textarea
                  id="orderDetails"
                  name="orderDetails"
                  rows="5"
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 border focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="Provide details of your bulk order"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white font-bold px-6 py-3 rounded-md hover:bg-gray-200 hover:text-black transition focus:outline-none"
              >
                Submit Order
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
