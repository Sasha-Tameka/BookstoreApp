📚 BookHive – ASP.NET MVC Book Management App

Author: Sasha Palmer
Institution: Herzing College
🧾 Project Description

BookHive is a web application developed using ASP.NET MVC and Firebase Authentication, allowing users to securely register, log in, and manage a personal library of books. Built for educational purposes, this project showcases how to implement user authentication and CRUD operations (Create, Read, Update, Delete) in a clean MVC architecture using Visual Studio Code.
🛠 Technologies Used

Front-end:
Razor Pages – Dynamic HTML templates integrated with C# logic
Bootstrap/CSS – Responsive and styled layout
JavaScript – Front-end validation and interactivity
Back-end:
ASP.NET MVC (C#) – Structured web framework for creating maintainable and scalable applications
Firebase Authentication – Secure user sign-up and login via email/password
Firebase Realtime Database – Stores and retrieves book data in real-time (optional)
Development Environment:
Visual Studio Code – Lightweight and flexible code editor
.NET SDK – Required for building and running the application
🔑 Key Features

User Authentication:
Sign up, log in using Firebase Authentication.
Logout and redirect to the homepage
CRUD Operations:
Manage your book collection for authenticated users:
Add a new book with title, author, and price. Also, created new Id for each book
View a list of saved books for all of the users
Edit book details
Delete books
MVC Structure:
Clean separation of concerns using Models, Views, and Controllers.
Firebase Integration:
Authentication (required)
Realtime Database (optional – can be used for storing books if configured)
🚀 Getting Started

Prerequisites:
.NET 7 SDK
Visual Studio Code
Firebase Project with Authentication enabled
Steps:
Clone the repository
git clone https://github.com/Sasha-Tameka/BookstoreApp
cd BookstoreApp
Set up Firebase Authentication
Add your Firebase config to /wwwroot/js/firebase-config.js
Enable Email/Password sign-in from Firebase console
Run the app
dotnet run
Navigate to your local host in your browser.
Start exploring
Sign up or log in
Add, view, edit, or delete books
⚙ Project Structure

/Controllers --> C# Controllers (AuthController, BookController,HomeController)
/Models --> Book.cs, UserModel.cs (Model)
/Views --> Razor pages for Book ,Auth and Home
/wwwroot --> Static assets (CSS, JS)-> In JS there is AuthFirebase and RealTime DB
Startup.cs --> Middleware and routing setup
Program.cs --> App entry point
⚠ Known Challenges

Securely linking Firebase Authentication with MVC sessions
Managing asynchronous Firebase calls from Razor Views
Ensuring real-time updates if using Realtime Database
🎥 Demo

## HomePage
![Screenshot](images/homepage.png)