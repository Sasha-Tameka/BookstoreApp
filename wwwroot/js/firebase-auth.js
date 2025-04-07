import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgfSDwaNHaqCUdqskOmbVcarg8tVK7kbY",
  authDomain: "bookstoreapp-719b6.firebaseapp.com",
  projectId: "bookstoreapp-719b6",
  storageBucket: "bookstoreapp-719b6.firebasestorage.app",
  messagingSenderId: "615824493852",
  appId: "1:615824493852:web:ec2fe6dfed664b7c41fed9",
  measurementId: "G-D2D9PM03L9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup Function
document
  .getElementById("signup-form")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup Successful! Please log in.");
      //  window.location.href = "/Book/Index";
    } catch (error) {
      console.error("Signup Error:", error.message);
      alert("Signup failed: " + error.message);
    }
  });
// Login Function
document.getElementById("login-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login Successful!");
    // window.location.href = "/Book/Index";
  } catch (error) {
    console.error("Login Error:", error.message);
    alert("Login failed: " + error.message);
  }
});
