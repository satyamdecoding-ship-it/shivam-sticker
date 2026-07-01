

// import { initializeApp } from "firebase/app";
// import { getAuth , GoogleAuthProvider } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyAAJtUm73jddzPmo4MrfVAi4zN5QNM2poU",
//   authDomain: "shivam-sticker.firebaseapp.com",
//   projectId: "shivam-sticker",
//   storageBucket: "shivam-sticker.firebasestorage.app",
//   messagingSenderId: "170177733691",
//   appId: "1:170177733691:web:d0568b531f29ba10d3a81e",
//   measurementId: "G-MEPVGXWXCK"
// };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export { auth, provider };



 import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOXZN_A6wzpeQBGZ6LlAMsEI4S2iTbg-c",
  authDomain: "satyam-5b011.firebaseapp.com",
  projectId: "satyam-5b011",
  storageBucket: "satyam-5b011.firebasestorage.app",
  messagingSenderId: "150569668536",
  appId: "1:150569668536:web:fb01c4107d84ceb85c494d",
  measurementId: "G-HPZSZHCB95"
};
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
