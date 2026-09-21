
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const products = [
  {
    id: 1,
    name: "Discover Old Model",
    image: "/images/sticker1.jpg",
    description: "Visor",
    information:
      "Discover Old Model is a classic bike that is perfect for cruising around the city. It has a 100cc engine and a top speed of 100km/h.",
  },
  {
    id: 2,
    name: "CD dlx",
    image: "/images/sticker2.jpg",
    description: "Panel",
    information:
      "CD dlx is a modern bike that is perfect for cruising around the city. It has a 100cc engine and a top speed of 100km/h.",
  },
  {
    id: 3,
    name: "hero bike",
    image: "/images/sticker3.jpg",
    description: "Panel",
    information:
      "Hero bike is a classic bike that is perfect for cruising around the city. It has a 100cc engine and a top speed of 100km/h.",
  },
  {
    id: 4,
    name: "passion pro",
    image: "/images/sticker4.jpg",
    description: "Panel",
    information:
      "Passion pro is a modern bike that is perfect for cruising around the city. It has a 100cc engine and a top speed of 100km/h.",
  },
  {
    id: 5,
    name: "star sport new model",
    image: "/images/sticker5.jpg",
    description: "Visor",
    information:
      "Star sport new model is a classic bike that is perfect for cruising around the city. It has a 100cc engine and a top speed of 100km/h.",
  },
  {
    id: 6,
    name: "scotty 125cc",
    image: "/images/sticker6.jpg",
    description: "Visor",
    information:
      "Scotty 125cc is a classic bike that is perfect for cruising around the city. It has a 100cc engine and a top speed of 100km/h.",
  },
  {
    id: 7,
    name: "pulsar New model",
    image: "/images/sticker7.jpg",
    description: "Visor",
    information:
      "Pulsar New model is a classic bike that is perfect for cruising around the city. It has a 100cc engine and a top speed of 100km/h.",
  },
  {
    id: 8,
    name: "spl bs6",
    image: "/images/sticker8.jpg",
    description: "Panel",
    information:
      "Spl bs6 is a classic bike that is perfect for cruising around the city. It has a 100cc engine and a top speed of 100km/h.",
  },
  {
    id: 9,
    name: "shine",
    image: "/images/sticker9.jpg",
    description: "Visor",
    information:
      "Shine is a classic bike that is perfect for cruising around the city. It has a 100cc engine and a top speed of 100km/h.",
  },
];

export default function PreviewImage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [storequantity, setStorequantity] = useState("");

  // Get ID from URL
  const idString = searchParams.get("id");

  // Convert ID to number
  const id = Number(idString);

  // Find product
  const product = products.find((p) => p.id === id);

  // Debug information
  console.log("URL ID:", idString);
  console.log("Converted ID:", id);
  console.log("Product:", product);

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-red-600">
          Product Not Found
        </h1>

        <p className="mt-4">
          Product ID: {idString || "No ID found"}
        </p>

        <button
          onClick={() => router.push("/Home")}
          className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  // ADD TO CART
  const addToCart = () => {
    const quantity = Number(storequantity);

    if (!storequantity || quantity < 1) {
      alert("Please enter quantity");
      return;
    }

    // Get existing cart
    const savedCart = localStorage.getItem("cart");

    let cart = [];

    if (savedCart) {
      try {
        cart = JSON.parse(savedCart);
      } catch (error) {
        console.log("Cart data was invalid. Starting new cart.");
        cart = [];
      }
    }

    // Check if product already exists
    const existingProductIndex = cart.findIndex(
      (item: any) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Product already exists
      cart[existingProductIndex].quantity =
        Number(cart[existingProductIndex].quantity) + quantity;
    } else {
      // Add new product
      cart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        description: product.description,
        information: product.information,
        quantity: quantity,
      });
    }

    // Save cart
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Cart saved:", cart);

    // Go to cart
    router.push("/cartpage");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-12">

        {/* PRODUCT IMAGE */}
        <div className="flex justify-center items-center md:w-1/2 bg-white shadow-lg rounded-xl p-6 border">
          <img
            src={product.image}
            alt={product.name}
            className="w-[450px] h-[450px] object-contain"
          />
        </div>

        {/* PRODUCT DETAILS */}
        <div className="md:w-1/2 flex flex-col justify-center">

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="text-gray-900 text-3xl font-bold mt-4">
            {product.description}
          </p>

          <p className="text-gray-700 text-lg mt-4 leading-8">
            {product.information}
          </p>

          {/* QUANTITY */}
          <input
            type="number"
            min="1"
            value={storequantity}
            onChange={(e) => setStorequantity(e.target.value)}
            placeholder="Set Quantity"
            className="mt-6 w-[130px] border border-gray-800 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-black font-bold"
          />

          {/* BUTTONS */}
          <div className="flex gap-5 mt-8">

            <button
              onClick={addToCart}
              className="border border-gray-800 text-black font-semibold px-10 py-4 rounded-lg shadow-md transition duration-300 hover:bg-black hover:text-white"
            >
              🛒 Add to Cart
            </button>

            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-4 rounded-lg shadow-md transition duration-300"
            >
              ⚡ Buy Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

