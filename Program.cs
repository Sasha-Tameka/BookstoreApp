using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Firebase.Database;
using Microsoft.Extensions.DependencyInjection;


var builder = WebApplication.CreateBuilder(args);



// Register FirebaseClient
builder.Services.AddSingleton<FirebaseClient>(provider =>
    new FirebaseClient("https://bookstoreapp-719b6-default-rtdb.firebaseio.com/"));



// Add authentication services
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/Auth/Login";  // Redirect here when not authenticated
        options.LogoutPath = "/Auth/Logout";  // Logout path
    });


// Add MVC services
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Use Authentication and Authorization middleware
app.UseAuthentication();
app.UseAuthorization();

// Serve static files like CSS, JavaScript, images, etc.
app.UseStaticFiles();

// Configure routing
app.UseRouting();

// Set up route mapping for controllers
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// Run the app
app.Run();
