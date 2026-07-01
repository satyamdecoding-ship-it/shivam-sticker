"use client"
import Image from "next/image";
import { Search } from "lucide-react";
// import Link from "next/link";
import { useState } from "react";

const products = [
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

export default function Home() {
 
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
    
  
  const handleSearch = () => {
    const search = searchTerm.toLowerCase();
  
    const result = products
      .filter((product) => {
        return (
          product.name.toLowerCase().includes(search) ||
          product.description.toLowerCase().includes(search)
        );
      })
      .sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
  
        // Exact match first
        if (aName === search) return -1;
        if (bName === search) return 1;
  
        // Starts-with match second
        if (aName.startsWith(search)) return -1;
        if (bName.startsWith(search)) return 1;
  
        return 0;
      });
  
    setFilteredProducts(result);
  };
  
  return (
    <div className="min-h-screen bg-gray-100">

     
    
      {/* 🔹 BANNER */}
      <div className="pt-20 flex justify-center px-4">
        <div className="relative w-full max-w-5xl"> 

          <Image 
            src="/poster.png"
            alt="poster"
            width={1200}
            height={400}
            className="rounded-lg object-cover object-[center_top] w-full h-[230px] md:h-[280px]"
            loading="eager"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

          {/* Text */}
          <h1
            className="
            absolute top-1/2 left-[25%]
           -translate-x-1/2 -translate-y-1/2
            text-2xl md:text-4xl lg:text-5xl
            font-semibold
            text-white/90
            drop-shadow-md
            tracking-wide text-center
              "
           >
             Best Deal
           <br></br>
          <span>Affordable Price </span> 
           </h1>


        </div>
      </div>

      {/* 🔹 SEARCH + LINKS */}
      <div className="w-full max-w-2xl mx-auto px-4 mt-8">
  <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">

    <Search className="ml-5 text-gray-1100" size={20} />

    <input
      type="text"
      placeholder="Search for bike stickers..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="flex-1 px-4 py-3 outline-none text-gray-1100 placeholder-gray-600"
    />

    <button
      onClick={handleSearch}
      className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition"
    >
      Search
    </button>

  </div>
</div>
      
      <div className="px-4 mt-10 mb-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

    {filteredProducts.map((product) => (
      <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition w-64 mx-auto">
        
        {/* Image */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-50 h-50 "
        />

        {/* Name */}
        <h2 className="text-lg font-bold mt-2">
          {product.name}
        </h2>

        {/* Description */}
        <p className="text-sm font-bold">
          {product.description}
        </p>

      </div>
    ))}

  </div>
</div>






      {/* 🔹 FOOTER */}
      <div className="w-full bg-white text-black text-center p-4 text-xs border-t  ">
        <p>1188/5,NAI WALA, KAROL BAGH, NEW DELHI-110005</p>
        <p>Email: shivamsticker@gmail.com</p>
        <p>Phone: +91 9354053861</p>
        <button className="mt-2 px-3 py-1 border rounded hover:bg-black hover:text-white transition">
          Instagram
        </button>
      </div>

    </div>
  );
}






