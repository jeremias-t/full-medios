// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm2KWkzXe8Cswqe9rqvszU--pzFdGDJaE",
  authDomain: "full-medios.firebaseapp.com",
  projectId: "full-medios",
  storageBucket: "full-medios.appspot.com",
  messagingSenderId: "80521036443",
  appId: "1:80521036443:web:95d40c0c6bfcd600173c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Get a non-default Storage bucket
const storage = getStorage(app, "gs://full-medios.appspot.com");

async function getCities() {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

// Call the function
getCities().then(cityList => {
  console.log(cityList);
});

// Access a file in Storage
const storageRef = ref(storage, 'path/to/your/file');
getDownloadURL(storageRef)
  .then((url) => {
    console.log(`File available at ${url}`);
  })
  .catch((error) => {
    console.error(`Failed to get download URL: ${error}`);
  });
