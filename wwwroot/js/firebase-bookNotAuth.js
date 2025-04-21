import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

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
const database = getDatabase(app);

async function fetchBooksNotAuth() {
  try {
    const booksSnapshot = await get(ref(database, "Books"));
    const booksTable = document.getElementById("books-table-body");

    if (booksTable) {
      if (booksSnapshot.exists()) {
        const books = booksSnapshot.val();

        Object.values(books).forEach((book) => {
          const row = `<tr>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.price}</td>
                        
                    </tr>`;
          booksTable.innerHTML += row;
        });
      } else {
        booksTable.innerHTML = "<tr><td colspan='4'>No books found</td></tr>";
      }
    }
  } catch (error) {
    console.error("Error fetching books:", error.message);
    alert("Failed to load books: " + error.message);
  }
}

// Load books on page load
document.addEventListener("DOMContentLoaded", fetchBooksNotAuth);
