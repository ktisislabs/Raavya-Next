"use client";

import { useParams } from "next/navigation";
import { FurnitureData } from "@/app/Data/Furniture";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

function ProductDetail() {
  const { productId } = useParams();

  const phoneNumber = "917710853700"
 

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!productId) return;

    const selectedProduct = FurnitureData.find((item) => item._id === Number(productId));
    setProduct(selectedProduct);

    console.log(selectedProduct);
  }, [productId]);

  if (!product) return <div className="text-center text-lg font-semibold mt-10">Product not found...</div>;

  return (
    <>
      <Navbar />
      <div className="product-detail-page bg-white w-full min-h-screen flex flex-col items-center justify-center px-4 relative py-10">
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
        <div className="Product-Card w-full max-w-7xl z-10 bg-white flex flex-col h-auto lg:flex-row items-center justify-between py-8 gap-6 px-4 lg:px-8 rounded-lg shadow-lg">
          {/* Image Section */}
          <div className="Image-div w-full lg:w-1/2 flex justify-center">
            <Image
              src={product.image_1}
              alt={product.name}
              width={500}
              height={500}
              quality={100}
              unoptimized
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Product Details Section */}
          <div className="Product-details w-full lg:w-1/2 flex flex-col items-center lg:items-start text-black gap-4 px-4 lg:px-6">
            <h1 className="text-2xl lg:text-3xl font-semibold text-center lg:text-left">{product.name}</h1>

            {/* Rating stars */}
            <div className="flex gap-1 justify-center lg:justify-start">
              {Array(5).fill(0).map((_, index) => (
                <span key={index} style={{ color: 'gold', fontSize: '24px' }}>★</span>
              ))}
            </div>

            <p className="text-base lg:text-lg text-center lg:text-left leading-relaxed">{product.Description}</p>

            <p className="text-sm text-gray-600 text-center lg:text-left">Category: {product.category}</p>

            {/* Enquire button */}
            <a 
  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hello, I'm interested to enquire about ${product.name}`)}`} 
  target="_blank" 
  rel="noopener noreferrer"
>  <button className="bg-yellow-700 text-white py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors duration-300 w-full sm:w-auto text-lg">
              Enquire
            </button></a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
