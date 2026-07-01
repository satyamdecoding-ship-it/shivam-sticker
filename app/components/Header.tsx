"use client";

import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";

export default function Header() {
    const Router = useRouter();

    const handlelogout = async () =>{
      try {
        signOut(auth)
      Router.push("/login-page")  
      } catch (error) {
        console.log("logout error:", error)
      }
    }
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50 h-16 flex items-center justify-between px-6">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
          priority
        />
        <h1 className="font-bold text-lg">Shivam Sticker</h1>
      </div>

      {/* Links */}
      <div className="flex gap-6 text-sm font-bold md:text-base">
        <Link href="/Home">Home</Link>

        <Link href="/product-quality">
          Product Quality
        </Link>

        <Link href="/place-order">
          Place Order
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 text-sm font-bold">
        <button
          onClick={() => (window.location.href = "tel:8084257809")}
          className="px-3 py-1 text-sm border rounded hover:bg-black hover:text-white"
        >
          Contact Us
        </button>

        <button onClick={handlelogout} className="px-3 py-1 text-sm border rounded hover:bg-black hover:text-white">
          Log Out
        </button>
      </div>
    </header>
  );
}