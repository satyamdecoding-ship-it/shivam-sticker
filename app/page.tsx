"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 HEADER */}
      <div className="fixed top-0 left-0 w-full bg-white shadow z-50 h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image 
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="font-bold text-lg">Shivam Sticker</h1>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button onClick={()=>window.location.href = "tel:8084257809"}
          className="px-3 py-1 text-sm border border-black rounded hover:bg-black hover:text-white transition">
            Contact Us
          </button>
        

          <button className="px-3 py-1 text-sm border border-black rounded hover:bg-black hover:text-white transition">
            Log Out
          </button>
        </div>

      </div>

      {/* 🔹 BANNER */}
      <div className="pt-20 flex justify-center px-4">
        <div className="relative w-full max-w-5xl">

          <Image 
            src="/poster.png"
            alt="poster"
            width={1200}
            height={400}
            className="rounded-lg object-cover object-[center_top] w-full h-[230px] md:h-[280px]"
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
      <div className="flex flex-col items-center mt-8">

        <input
          type="text"
          placeholder="Search stickers..."
          className="w-72 md:w-96 px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button>Search</button>

        <div className="flex gap-6 mt-4 text-sm md:text-base">
          <Link href="/product-quality" className="hover:underline">
            Product Quality
          </Link>

          <Link href="/place-order" className="hover:underline">
            Place Order
          </Link>
        </div>

      </div>

      {/* 🔹 PRODUCTS */}
      <div className="px-4 mt-10 mb-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="bg-white p-4 shadow rounded hover:shadow-lg transition">
              <p className="text-center font-medium">Product {i + 1}</p>
            </div>
          ))}

        </div>

      </div>

      {/* 🔹 FOOTER */}
      <div className="w-full bg-white text-black text-center p-4 text-xs border-t">
        <p>Mohan Garden Uttam Nagar New Delhi 110059</p>
        <p>Email: shivamsticker@gmail.com</p>
        <p>Phone: +91 8084257809</p>
        <button className="mt-2 px-3 py-1 border rounded hover:bg-black hover:text-white transition">
          Instagram
        </button>
      </div>

    </div>
  );
}