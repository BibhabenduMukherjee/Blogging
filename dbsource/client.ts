// Import the functions you need from the SDKs you need
import { initializeApp , getApps , getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN!,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEID!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID!
};

// Initialize Firebase
 const app =  !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app)
const storage = getStorage()

export {app , db , storage}