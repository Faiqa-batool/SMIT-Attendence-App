
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
  
const firebaseConfig = {
    apiKey: "AIzaSyAdL0QHWFJrYdR9O5aCAM9b-b92wIxZMLs",
    authDomain: "smit-attendance-app-d1a06.firebaseapp.com",
    databaseURL: "https://smit-attendance-app-d1a06-default-rtdb.firebaseio.com",
    projectId: "smit-attendance-app-d1a06",
    storageBucket: "smit-attendance-app-d1a06.appspot.com",
    messagingSenderId: "960213561491",
    appId: "1:960213561491:web:7edb1bdedf8314243c5d66",
    measurementId: "G-FFWTBKN6BB"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);