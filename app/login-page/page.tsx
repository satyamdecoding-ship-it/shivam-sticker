// "use client";
// import { signInAnonymously } from "firebase/auth";
// import { auth, provider } from "../firebase";
// import { signInWithPopup } from "firebase/auth";
// import { useRouter } from "next/navigation";


 
// export default function LoginPage() {
//     const router = useRouter()
//   const handleLogin = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//       router.push("/Home")
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleguest = async () =>{
//     try{
//      await signInAnonymously(auth)
//      router.push("/Home")
//     }catch(error){
//       console.log("error")
//     }
//     }

//   return (
//     <div>
//       <button onClick={handleLogin}>
//         Login with Google
//       </button>

//       <button onClick={handleguest}>
//         Login with Guest
//       </button>
//     </div>
//   );
// }






"use client";

import { signInAnonymously, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/Home");
    } catch (error) {
      console.error(error);
    }
  };

  const handleguest = async () => {
    try {
      await signInAnonymously(auth);
      router.push("/Home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img
            src="/logo.png" // Replace with your logo
            alt="Shivam Sticker"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign in to continue to <br />
          <span className="font-semibold text-blue-600">
            Shivam Sticker
          </span>
        </p>

        {/* Google Login */}
        <button
          onClick={handleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 font-medium hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Guest Login */}
        <button
          onClick={handleguest}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 font-semibold transition"
        >
          Continue as Guest
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-8">
          Browse products as a guest or sign in with Google to access all
          features.
        </p>
      </div>
    </div>
  );
}
