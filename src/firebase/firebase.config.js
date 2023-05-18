// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDckJGh-dPEFcyvTrnYJzQp3QW0dpZT9Ts',
	authDomain: 'sport-toys-network.firebaseapp.com',
	projectId: 'sport-toys-network',
	storageBucket: 'sport-toys-network.appspot.com',
	messagingSenderId: '107787720769',
	appId: '1:107787720769:web:a00f93993962b6cad64ec0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
