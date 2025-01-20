import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

function About() {
  return (
    <>
      <div className="About-screen w-screen bg-white">
        <Navbar />

        <section className="AboutSection-Heading w-screen flex flex-col items-center px-4 py-8 md:py-12">
          {/* Text Section */}
          <div className="About-text flex flex-col items-center justify-center w-full md:w-3/4 lg:w-1/2 bg-white px-4 py-6">
            <p className="text-sm font-poppins text-gray-500 uppercase tracking-wide text-center">
              About Us
            </p>
            <p className="text-2xl md:text-3xl font-semibold my-6 text-center font-poppins text-black">
              "Crafted for the soul. Designed for eternity"
            </p>
            <p className="text-sm md:text-base lg:text-lg px-2 md:px-6 text-gray-600 text-center leading-relaxed">
              We founded TheRaavya with a simple yet powerful vision: to bring beauty into a million
              homes. As our customers began sharing glimpses of their spaces, we noticed something
              extraordinary: each home had its own distinct character. The same table, the same
              chair, found new life and meaning in different settings, reflecting the unique
              personality of its owner.
              <br />
              <br />
              This insight sparked a deeper understanding: people don't just want beautiful homes;
              they want spaces that are uniquely theirs. And we discovered something even more
              profound: true joy lies not just in owning, but in creating. At TheRaavya, we
              celebrate this journey of creation, helping you craft a home that tells your story.
            </p>
            <p className="font-bold text-gray-800 mt-4">Raghav Khanna (Founder, TheRaavya)</p>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-3/4 lg:w-1/2 h-[300px] md:h-[400px] mt-8">
            <Image
              src="/About.jpg"
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
        <section className="AboutSection-2 py-16 bg-white flex flex-col items-center justify-center text-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            <div>
              <p className="text-4xl font-bold text-black">10,000+</p>
              <p className="text-gray-500">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-black">500+</p>
              <p className="text-gray-500">Furniture & Home Decor Designs</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-black">40+</p>
              <p className="text-gray-500">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-black">99%</p>
              <p className="text-gray-500">Customer Satisfaction Rate</p>
            </div>
          </div>
        </section>
        <section className="AboutSection-3 py-16 w-screen bg-gray-50">
          <div className="flex flex-col items-center px-6">
            <h1 className="text-sm font-semibold italic font-poppins my-4 text-black">
              Our Mission
            </h1>
            <p className="w-full max-w-4xl font-poppins text-gray-600 text-center font-light">
              Our mission is to revolutionize the way people experience furniture and home decor by
              making high-quality, customized, and sustainable products accessible to everyone. We
              believe that sustainability should not be a luxury but a standard, and that beautiful,
              thoughtfully designed spaces should be within reach for all.
              <br />
              <br />
              Through vertical integration, we control every stage of the production process, from
              sourcing raw materials to crafting finished products. This approach not only ensures
              impeccable quality and design but also significantly reduces costs. By cutting out
              intermediaries, we are able to pass these savings directly to our customers, making
              sustainable living more affordable and inclusive.
              <br />
              <br />
              At TheRaavya, we are committed to combining style, functionality, and sustainability
              in every piece, empowering you to create a home that reflects your values without
              compromising on quality or budget. Together, we’re shaping a future where conscious
              living meets timeless elegance.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default About;
