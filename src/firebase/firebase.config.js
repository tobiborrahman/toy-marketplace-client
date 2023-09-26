// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_apiKey,
	authDomain: import.meta.env.VITE_authDomain,
	projectId: import.meta.env.VITE_projectId,
	storageBucket: import.meta.env.VITE_storageBucket,
	messagingSenderId: import.meta.env.VITE_messagingSenderId,
	appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// const firebaseConfig = {
// 	apiKey: import.meta.env.VITE_apiKey,
// 	authDomain: import.meta.env.VITE_authDomain,
// 	projectId: import.meta.env.VITE_projectId,
// 	storageBucket: import.meta.env.VITE_storageBucket,
// 	messagingSenderId: import.meta.env.VITE_messagingSenderId,
// 	appId: import.meta.env.VITE_appId,
// };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAZTLs_tWsZ_09WFRC9MLNEUDvQ0gUVu7Q",
//   authDomain: "toy-market-network.firebaseapp.com",
//   projectId: "toy-market-network",
//   storageBucket: "toy-market-network.appspot.com",
//   messagingSenderId: "812350981498",
//   appId: "1:812350981498:web:011f187264807eef6142c3"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
