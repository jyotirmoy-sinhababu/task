'use client';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCsQOYdSxJW_NjgH0sfJSyPE_ZKpFvrfj4',
  authDomain: 'pickupline-generator-5fc90.firebaseapp.com',
  projectId: 'pickupline-generator-5fc90',
  storageBucket: 'pickupline-generator-5fc90.appspot.com',
  messagingSenderId: '464985179233',
  appId: '1:464985179233:web:efefb4e29201cffb115620',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
