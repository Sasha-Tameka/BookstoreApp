using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

public class BookController : Controller
{
    // Display all books
    [HttpGet]
    public IActionResult Index()
    {
        return View();
    }

    // Show Add Book Form
    [HttpGet]
    public IActionResult Add()
    {
        return View();
    }

    // Show Edit Book Form
    [HttpGet]
    public IActionResult Edit(int id)
    {
        return View();
    }
}