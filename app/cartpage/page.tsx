"use client"
import { useSearchParams } from "next/navigation";
import { products } from "../previewimage/page";
export default function CartPage() {
    const searchParams = useSearchParams();
    const id = Number(searchParams.get("id"))
    const product = products.find((p)=>p.id === id);
    if(!product){
        return <h1>Product Not Found</h1>;
    }
    return (
        <div>
            <div className="flex justify-center items-center md:w-1/2 bg-white shadow-lg rounded-xl p-6 border">
        <img
          src={product.image}
          alt={product.name}
          className="w-[450px] h-[450px] object-contain"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center">
  
  <h1 className="text-4xl font-bold text-gray-900">
    {product.name}
  </h1>

  <p className="text-gray-600 text-lg mt-4 leading-8">
    {product.description}
  </p>
  </div>
        </div>
    )
}