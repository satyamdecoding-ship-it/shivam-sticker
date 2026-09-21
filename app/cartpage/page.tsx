// "use client"
// import { useSearchParams } from "next/navigation";
// import { products } from "../previewimage/page";
// export default function CartPage() {
//     const searchParams = useSearchParams();
//     const id = Number(searchParams.get("id"))
//     const product = products.find((p)=>p.id === id);
//     if(!product){
//         return <h1>Product Not Found</h1>;
//     }
//     return (
//         <div>
//             <div className="flex justify-center items-center md:w-1/2 bg-white shadow-lg rounded-xl ">
            
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-[150px] h-[150px] object-contain"
//         />
//       </div>
//       <div className="md:w-1/2 flex flex-col justify-center">
  
//   <h1 className="text-4xl font-bold text-gray-900">
//     {product.name}
//   </h1>

//   <p className="text-gray-600 text-lg mt-4 leading-8">
//     {product.description}
//   </p>
//   </div>
//         </div>
//     )
// }


// /*notes
// 1.we have to fix the product on the cart page when user click 
// on the product of add to cart and when new product is added in the
// cart page then all products are shown in the cart page.
// 2. place all products in the cart page in a grid layout.
// 3. add a button to remove the product from the cart page.WITH EVERY PRODUCT THERE SHOULD BE A REMOVE BUTTON.
// 4. Add a buy now button to the cart page.







// */






"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CartProduct = {
  id: number;
  name: string;
  image: string;
  description: string;
  information: string;
  quantity: number;
};

export default function CartPage() {
  const router = useRouter();

  const [cart, setCart] = useState<CartProduct[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      } catch (error) {
        console.error("Error reading cart:", error);
        setCart([]);
      }
    }
  }, []);

  // Remove product
  const removeProduct = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Increase quantity
  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Number(item.quantity) + 1,
          }
        : item
    );

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Decrease quantity
  const decreaseQuantity = (id: number) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Number(item.quantity) - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-10">
          🛒 Your Cart
        </h1>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">

            <h2 className="text-2xl font-bold mb-4">
              Your cart is empty
            </h2>

            <p className="text-gray-600 mb-6">
              Add some products to your cart.
            </p>

            <button
              onClick={() => router.push("/Home")}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
            >
              Continue Shopping
            </button>

          </div>
        ) : (
          <>

            {/* Cart Products */}
            <div className="space-y-5">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md p-5 flex flex-col md:flex-row items-center gap-6"
                >

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-contain"
                  />

                  {/* Product Information */}
                  <div className="flex-1">

                    <h2 className="text-2xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-gray-700 font-semibold mt-1">
                      {item.description}
                    </p>

                    <p className="text-gray-500 text-sm mt-2">
                      {item.information}
                    </p>

                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-9 h-9 border border-gray-400 rounded-lg font-bold hover:bg-gray-200"
                    >
                      -
                    </button>

                    <span className="text-xl font-bold min-w-[30px] text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-9 h-9 border border-gray-400 rounded-lg font-bold hover:bg-gray-200"
                    >
                      +
                    </button>

                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeProduct(item.id)}
                    className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

            {/* Bottom Buttons */}
            <div className="mt-10 flex flex-col md:flex-row justify-between gap-4">

              <button
                onClick={() => router.push("/Home")}
                className="border border-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white"
              >
                ← Continue Shopping
              </button>

              <button
                onClick={clearCart}
                className="border border-red-500 text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white"
              >
                Clear Cart
              </button>

            </div>

          </>
        )}

      </div>

    </div>
  );
}