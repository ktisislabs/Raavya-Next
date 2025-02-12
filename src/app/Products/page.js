'use client';
import React, { useState,useEffect } from 'react';
import { FurnitureData } from '../Data/Furniture';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HomeDecorData } from '../Data/HomeDecor';
import { LiaFilterSolid } from 'react-icons/lia';
import Link from 'next/link';

import { FaArrowUp } from 'react-icons/fa';


import Head from 'next/head';

function Page() {
  const [allProducts, setAllProducts] = useState(true);
  const [homeDecor, setHomeDecor] = useState(false);
  const [furniture, setFurniture] = useState(false);
  const [showGoTop, setShowGoTop] = useState(false);

  const handleAllProducts = () => {
    setAllProducts(true);
    setHomeDecor(false);
    setFurniture(false);
  };

  const handleHomeDecor = () => {
    setHomeDecor(true);
    setAllProducts(false);
    setFurniture(false);
  };

  const handleFurniture = () => {
    setFurniture(true);
    setAllProducts(false);
    setHomeDecor(false);
  };
  useEffect(() => {
    if (typeof window === "undefined") return; // Prevents SSR errors

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <>
    <Head>
        <title>TheRaavya : Products</title>
        <meta name="description" content="Explore our exclusive range of home decor and furniture at TheRaavya." />
      </Head>
      <div className="w-screen min-h-screen relative overflow-x-hidden overflow-y-scroll">
        {/* Background Image */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <Image
            src="/Products.jpg"
            layout="fill"
            quality={100}
            objectFit="cover"
            alt="Background"
          />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Contact Section */}
        <section className="w-screen h-auto flex flex-col items-center justify-center text-center px-6 py-16 bg-transparent">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Products</h1>
          <p className="text-base md:text-lg text-white max-w-2xl">
          Our products are designed to enhance your lifestyle with seamless functionality, premium quality, and cutting-edge technology. Explore our range and find what fits your needs perfectly!
          </p>
        </section>

        {/* Product Filter Section */}
        <div className="p-6 bg-white">
          <h1 className="text-3xl font-regular text-gray-800 mb-6 text-center flex flex-col items-center">
          <span className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 my-6 sm:my-12">
  <LiaFilterSolid className="text-xl sm:text-2xl" />
  <p
    className="text-xs sm:text-sm border p-2 sm:p-3 rounded-xl bg-black text-white hover:bg-white hover:text-black font-semibold cursor-pointer transition-all"
    onClick={handleAllProducts}
  >
    All Products
  </p>
  <p
    className="text-xs sm:text-sm border p-2 sm:p-3 rounded-xl bg-black text-white hover:bg-white hover:text-black font-semibold cursor-pointer transition-all"
    onClick={handleHomeDecor}
  >
    Home Decor
  </p>
  <p
    className="text-xs sm:text-sm border p-2 sm:p-3 rounded-xl bg-black text-white hover:bg-white hover:text-black font-semibold cursor-pointer transition-all"
    onClick={handleFurniture}
  >
    Furniture
  </p>
</span>

         
            {homeDecor && <span>Checkout our Home Decor Products</span>}
            {furniture && <span>Checkout our Furniture Products</span>}
          </h1>

          {/* Conditional rendering of products based on selected category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts ? (
              <>
                {HomeDecorData.concat(FurnitureData).map((product,index) => (
                  <div
                    key={index} 
                    className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Product Image */}
                    <div className="relative w-full h-[80vh]">
                      <Image
                        src={product.image_1}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-gray-700">{product.name}</h2>
                      <p className="text-gray-600 font-medium mt-4">
                        Category: <span className="text-gray-800">{product.category}</span>
                      </p>

                      {HomeDecorData.includes(product) ? (
              <Link href={`/Products/HomeDecor/${String(product._id)}`}>
                <button className="mt-4 px-4 py-2 border text-black rounded-lg hover:bg-black hover:text-white font-medium transition-colors">
                  View Details
                </button>
              </Link>
            ) : (
              <Link href={`/Products/Furniture/${String(product._id)}`}>
                <button className="mt-4 px-4 py-2 border text-black rounded-lg hover:bg-black hover:text-white font-medium transition-colors">
                  View Details
                </button>
              </Link>
            )}        </div>
                  </div>
                ))}
              </>
            ) : homeDecor ? (
              <>
                {HomeDecorData.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Product Image */}
                    <div className="relative w-full h-[80vh]">
                      <Image
                        src={product.image_1}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-gray-700">{product.name}</h2>
                      <p className="text-gray-600 font-medium mt-4">
                        Category: <span className="text-gray-800">{product.category}</span>
                      </p>

                      <Link href={`/Products/HomeDecor/${String(product._id)}`}>
  <button className="mt-4 px-4 py-2 border text-black rounded-lg hover:bg-black hover:text-white font-medium transition-colors">
    View Details
  </button>
</Link>
                    </div>
                  </div>
                ))}
              </>
            ) : furniture ? (
              <>
                {FurnitureData.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Product Image */}
                    <div className="relative w-full h-[80vh]">
                      <Image
                        src={product.image_1}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-gray-700">{product.name}</h2>
                      <p className="text-gray-600 font-medium mt-4">
                        Category: <span className="text-gray-800">{product.category}</span>
                      </p>
                      <Link href={`/Products/Furniture/${String(product._id)}`}>
  <button className="mt-4 px-4 py-2 border text-black rounded-lg hover:bg-black hover:text-white font-medium transition-colors">
    View Details
  </button>
</Link>
                    </div>
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </div>

        {/* Subscribe Section */}
        <section className="Contact-additional-section w-screen flex flex-col items-center justify-center text-center px-6 py-16 bg-transparent">
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
            Subscribe to The Raavya : Your Home Creator
          </h2>
          <p className="text-white max-w-2xl flex flex-col items-center">
            Follow us on our social media platforms to stay updated with the latest news and offers
          </p>
        </section>
        {showGoTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#6d3210] text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
          >
            <FaArrowUp size={20} />
          </button>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Page;
