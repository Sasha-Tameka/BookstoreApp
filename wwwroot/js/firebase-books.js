import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  get,
  update,
  remove,
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

// loadbook for editing
export async function loadBookForEdit(bookId) {
  console.log("🔹 Loading book with ID:", bookId); // Debugging Step 1 ✅

  if (!bookId) {
    alert("Error: No book ID provided!");
    return;
  }

  try {
    const bookRef = ref(database, `Books/${bookId}`);
    const bookSnapshot = await get(bookRef);

    if (bookSnapshot.exists()) {
      const book = bookSnapshot.val();
      console.log("🔹 Book data from Firebase:", book); // Debugging Step 2 ✅

      // Populate the form fields
      document.getElementById("book-id").value = bookId;
      document.getElementById("title").value = book.title;
      document.getElementById("author").value = book.author;
      document.getElementById("price").value = book.price;
    } else {
      alert("Error: Book not found in Firebase!");
    }
  } catch (error) {
    console.error("❌ Error loading book:", error.message);
    alert("Failed to load book: " + error.message);
  }
}

// 🔹 *Add New Book*
document
  .getElementById("add-book-form")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = e.target["title"].value;
    const author = e.target["author"].value;
    const price = e.target["price"].value;

    try {
      const newBookRef = push(ref(database, "Books")); // Auto-generate ID
      await set(newBookRef, {
        id: newBookRef.key,
        title,
        author,
        price,
      });

      alert("Book added successfully!");
      window.location.href = "/Book/Index";
    } catch (error) {
      console.error("Error adding book:", error.message);
      alert("Failed to add book: " + error.message);
    }
  });

// 🔹 *Fetch Books and Display in Table*
async function fetchBooks() {
  try {
    const booksSnapshot = await get(ref(database, "Books"));
    const booksTable = document.getElementById("books-table-body");

    if (booksTable) {
      booksTable.innerHTML = ""; // Clear previous data

      if (booksSnapshot.exists()) {
        const books = booksSnapshot.val();

        Object.values(books).forEach((book) => {
          const row = `<tr>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.price}</td>
                        <td>
                            <a class="btn btn-warning" href="/Book/Edit?id=${book.id}">Edit</a>
                            <button class="btn btn-danger" onclick="deleteBook('${book.id}')">Delete</button>
                        </td>
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

//edit
document
  .getElementById("edit-book-form")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const bookId = document.getElementById("book-id").value;
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const price = document.getElementById("price").value;

    try {
      await update(ref(database, `Books/${bookId}`), { title, author, price });

      alert("Book updated successfully!");
      window.location.href = "/Book/Index";
    } catch (error) {
      console.error("Error updating book:", error.message);
      alert("Failed to update book: " + error.message);
    }
  });

// 🔹 *Delete Book// 🔹 **Delete Book*
window.deleteBook = async function (bookId) {
  if (confirm("Are you sure you want to delete this book?")) {
    try {
      await remove(ref(database, `Books/${bookId}`));
      alert("Book deleted successfully!");
      window.location.reload();
    } catch (error) {
      alert("Failed to delete book: " + error.message);
    }
  }
};

// Load books on page load
document.addEventListener("DOMContentLoaded", fetchBooks);
