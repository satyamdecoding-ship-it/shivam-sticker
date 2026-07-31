"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
export const products = [
  {
    id: 1,
    name: "discover Old Model",
    image: "/images/sticker1.jpg",
    description: "Visor"
  },
  {
    id: 2,
    name: "CD dlx",
    image: "/images/sticker2.jpg",
    description: "panel"
  },
  {
    id: 3,
    name: "hero bike",
    image: "/images/sticker3.jpg",
    description: "Panel"
  },
  {
    id: 4,
    name: "passion pro",
    image: "/images/sticker4.jpg",
    description: "Panel"
  },
  {
    id: 5,
    name: "star sport new model",
    image: "/images/sticker5.jpg",
    description: "visor"
  },
  {
    id: 6,
    name: "scotty 125cc",
    image: "/images/sticker6.jpg",
    description: "visor"
  },
  {
    id: 7,
    name: "pulsar New model",
    image: "/images/sticker7.jpg",
    description: "visor"
  },
  {
    id: 8,
    name: "spl bs6",
    image: "/images/sticker8.jpg",
    description: "panel"
  },
  {
    id: 9,
    name: "shine",
    image: "/images/sticker9.jpg",
    description: "visor"
  }
];
export default function PreviewImage() {
  const [storequantity , setStorequantity] = useState("");
   const router = useRouter();
   

   const searchParams = useSearchParams();
   const id = Number(searchParams.get("id"));
   const product = products.find((p) => p.id === id);
   if (!product) {
    return <h1>Product Not Found</h1>;
   }
    
   


  return (
    
    <div className="max-w-7xl mx-auto px-6 py-10">
    <div className="flex flex-col md:flex-row gap-12">
  
      {/* Left Side - Product Image */}
      <div className="flex justify-center items-center md:w-1/2 bg-white shadow-lg rounded-xl p-6 border">
        <img
          src={product.image}
          alt={product.name}
          className="w-[450px] h-[450px] object-contain"
        />
      </div>
  
      {/* Right Side - Product Details */}
      <div className="md:w-1/2 flex flex-col justify-center">
  
        <h1 className="text-4xl font-bold text-gray-900">
          {product.name}
        </h1>
        
  
        <p className="text-gray-600 text-lg mt-4 leading-8">
          {product.description}
        </p>
        <br/>
  
        {/* Example Price */}
        <input
          type="number"
          min={1}
          value={storequantity}
          onChange={(e)=>setStorequantity(e.target.value)}
          placeholder="Set Quantity"
          className="w-[130px] border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        
          />
  
        {/* Buttons */}
        <div className="flex gap-5 mt-8">
          
          
          <button onClick= {()=> router.push(`/cartpage?id=${id}`)}  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-4 rounded-lg shadow-md transition duration-300">
            🛒 Add to Cart
          </button>
  
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-lg shadow-md transition duration-300">
            ⚡ Buy Now
          </button>
  
        </div>
  
      </div>
  
    </div>
  </div>
  )

}