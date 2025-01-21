import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Page() {
  return (
    <>
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
          <section className="Contact-main-section w-screen flex flex-col items-center justify-start bg-white py-16 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-gray-600 max-w-xl text-center mb-6">
              Fill out the form below or reach out to us directly through our contact information.
            </p>
            <form className="w-full max-w-lg flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-300 hover:text-black transition"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Additional Section */}
          <section className="Contact-additional-section w-screen flex flex-col items-center justify-center text-center px-6 py-16 bg-transparent">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">Stay Connected</h2>
            <p className="text-white max-w-2xl">
              Follow us on our social media platforms to stay updated with the latest news and offers.
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
