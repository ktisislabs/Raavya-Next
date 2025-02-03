"use client";

import { useParams } from "next/navigation";
import {  FurnitureData } from "../../Data/Furniture";
import { HomeDecorData } from "@/app/Data/HomeDecor";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

function ProductDetail() {
  const { productId } = useParams();

  

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!productId) return;

    // Ensure correct ID comparison and retrieve product details
    const productDetails =[...HomeDecorData,FurnitureData].find((item) => item._id === Number(productId));
    setProduct(productDetails);
    console.log(productDetails);
  }, [productId]);

  if (!product) return <div className="text-center">Product not found...</div>

  return (
    <>
      <Navbar />
      <div className="product-detail-page bg-white w-full h-screen flex flex-col items-center justify-center px-4 relative">
        {/* Background image */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <Image
            src="/productsbg.jpg"
            layout="fill"
            quality={100}
            objectFit="cover"
            alt="Contact background"
          />
        </div>

        {/* Product details section */}
        <div className="Product-Card w-full max-w-7xl z-20 bg-white flex flex-col h-[90vh] lg:flex-row items-center justify-between py-8 gap-6 px-4">
          {/* Image Section */}
          <div className="Image-div w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <Image
              src={product.image_1}
              alt={product.name}
              width={1000}
              height={1000}
              quality={100}
              unoptimized
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details Section */}
          <div className="Product-details w-full lg:w-1/2 flex flex-col items-center lg:items-start text-black gap-6 px-4 lg:px-8">
            <h1 className="text-2xl lg:text-3xl font-semibold text-center lg:text-left">{product.name}</h1>

            {/* Rating stars */}
            <div className="flex gap-1 justify-center lg:justify-start">
              {Array(5).fill(0).map((_, index) => (
                <span key={index} style={{ color: 'gold', fontSize: '28px' }}>★</span>
              ))}
            </div>

            <p className="text-base lg:text-lg text-center lg:text-left">{product.Description}</p>

            <p className="text-sm text-gray-600 text-center lg:text-left">{product.category}</p>

            {/* Enquire button */}
            <button className="bg-yellow-700 text-white py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors duration-300 w-full lg:w-auto text-lg">
              Enquire
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
