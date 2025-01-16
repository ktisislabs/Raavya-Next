import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';

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
          <div className="absolute inset-0 flex flex-col items-center gap-4 justify-center z-10">
            <Image src="/Mainlogo.png" alt="Raavya-Logo" width={200} height={200} />
            <Image src="/text-logo.png" alt="Raavya-Logo" width={400} height={100} />
            <button className="border bg-transparent text-white p-2 text-sm rounded-xl font-medium font-sans hover:bg-gray-200 hover:text-black">
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
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="text-[#5f4124] w-full text-7xl font-medium mx-5 flex flex-col items-start">
                Premium Home Decor Products
                <p className='text-lg '>We bring elegance and charm to your living spaces with our premium collection of handcrafted home decor products<br></br> designed to inspire and elevate your lifestyle.</p>
                <p className="text-sm underline hover:text-[#1f4124] cursor-pointer my-2">LEARN MORE</p>
              </h1>
            </div>
          </div>
        </section>

        {/* Third Section */}
        <section className="Home-Hero-3 w-screen h-screen sticky top-0">
          <div className="relative w-full h-full">
            <Image
              src="/Furniture.jpg"
              alt="Home-Decor"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="absolute"
            />
           
          </div>
        </section>
        <section className="Home-Hero-4 w-screen h-screen relative top-0">
          <div className="relative w-full h-full">
            
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="text-[#ffffff] w-full text-7xl font-medium mx-5 flex flex-col items-end">
                Premium Furniture Products
                <p className='text-lg text-right '>Discover The Raavya's exclusive range of premium furniture products thoughtfully designed to<br></br> blend style, comfort, and functionality, creating the perfect ambiance for your home.</p>
                <p className="text-sm underline hover:text-[#1f4124] cursor-pointer my-2">LEARN MORE</p>
              </h1>
            </div>
          </div>
        </section>
        
        <section className="Home-Hero-4 w-screen h-screen relative top-0">
          <div className="relative w-full h-full">
            
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="text-[#ffffff] w-full text-7xl font-medium mx-5 flex flex-col items-start">
                Visit Our Amazon Store
               
                <button className="border bg-transparent text-white p-2 text-sm rounded-xl font-medium font-sans hover:bg-gray-200 hover:text-black">
             Visit Store
            </button>
              </h1>
            </div>
          </div>
        </section>
       
      </div>
    </>
  );
}

export default Page;
