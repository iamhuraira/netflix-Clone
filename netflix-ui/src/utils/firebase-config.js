
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA30cV_CbO72EcYDVR37DQGqEAT8Ig-6Xk',
  authDomain: 'react-netflix-clone-fa6bb.firebaseapp.com',
  projectId: 'react-netflix-clone-fa6bb',
  storageBucket: 'react-netflix-clone-fa6bb.appspot.com',
  messagingSenderId: '698213007303',
  appId: '1:698213007303:web:65b7e9510319f7f37123e2',
  measurementId: 'G-9SGYD1L0QH',
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
