"use client"; 

import { useParams } from "next/navigation";
import { FurnitureData } from "../../Data/Furniture";
import Image from "next/image";
import { useState, useEffect } from "react";

function ProductDetail() {
  const {productId} = useParams()

  console.log(productId ,"id of product");

  

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!productId) return;

    // Ensure correct ID comparison
    const productDetails = FurnitureData.find((item) => item._id === Number(productId));
    setProduct(productDetails);
    console.log(productDetails);
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-page">
      <h1 className="text-4xl">{product.name}</h1>
      <div className="flex">
        <div className="w-1/2">
          <Image src={product.image_1} alt={product.name} width={500} height={500} />
        </div>
        <div className="w-1/2 p-6">
          <p><strong>Category:</strong> {product.category}</p>
          <p className="white"><strong>Description:</strong> {product.Description}</p> 
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
