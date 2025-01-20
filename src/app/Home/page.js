import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Footer from '../components/Footer';

function Page() {
  return (
    <>
      <div className="w-screen h-screen bg-white relative overflow-x-hidden overflow-y-scroll">
        <Navbar />

        {/* First Section */}
        <div className="Home-Hero w-screen h-screen sticky top-0">
          <video
            src="/HomeBg.mp4"
            loop
            autoPlay
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          ></video>
          <div className="absolute inset-0 flex flex-col items-center  justify-center z-10 px-4">
            <Image src="/Mainlogo.png" alt="Raavya-Logo" width={250} height={250} />
            <Image
              src="/text-logo.png"
              alt="Raavya-Logo"
              width={300}
              height={300}
              className="sm:w-[200px] md:w-[300px] lg:w-[500px]"
            />
            <button className="border bg-transparent text-white p-2 text-lg rounded-xl font-medium hover:bg-gray-200 hover:text-black">
              View Products
            </button>
          </div>
        </div>

        {/* Second Section */}
        <section className="Home-Hero-2 w-screen h-screen sticky top-0">
          <div className="relative w-full h-full">
            <Image
              src="/HomeDecor.jpg"
              alt="Home-Decor"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="absolute"
            />
            <div className="absolute inset-0 flex items-center  z-10 px-4">
              <div className="text-center md:text-left">
                <h1 className="text-[#5f4124] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium">
                  Premium Home Decor Products
                </h1>
                <p className="text-base text-[#5f4124] sm:text-lg mt-4">
                  We bring elegance and charm to your living spaces with our premium collection of
                  handcrafted home decor products designed to<br></br> inspire and elevate your lifestyle.
                </p>
                <p className="text-sm underline text-[#5f4124] hover:text-[#1f4124] cursor-pointer mt-2">
                  LEARN MORE
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Third Section */}
        <section className="Home-Hero-3 w-screen h-screen sticky top-0">
          <div className="relative w-full h-full">
            <Image
              src="/Furniture.jpg"
              alt="Furniture"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="absolute"
            />
            <div className="absolute inset-0 flex items-end mb-36  z-10 px-4">
              <div className="text-center md:text-left">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium">
                  Premium Furniture Products
                </h1>
                <p className="text-base sm:text-lg mt-4">
                  Discover The Raavya's exclusive range of premium furniture products thoughtfully
            
                  designed to blend style,<br></br>comfort, and functionality, creating the perfect ambiance
                  for your home.
                </p>
                <p className="text-sm underline hover:text-[#1f4124] cursor-pointer mt-2">
                  LEARN MORE
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fourth Section */}
        <section className="Home-Hero-4 w-screen h-screen relative top-0 bg-white">
          <div className="relative w-full h-full">
          <video
            src="/store.mp4"
            loop
            autoPlay
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          ></video>
            <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
              <div className="text-center">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium">
                  Visit Our Amazon Store
                </h1>
                <button className="border border-white bg-transparent text-[#ffffff] p-2 text-sm rounded-xl font-medium mt-5 hover:bg-gray-200 hover:text-black">
                  Visit Store
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Page;
