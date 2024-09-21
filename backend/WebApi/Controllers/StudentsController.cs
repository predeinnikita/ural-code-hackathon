using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

namespace WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class StudentsController : ControllerBase
{
    private readonly ILogger<StudentsController> logger;

    public StudentsController(ILogger<StudentsController> logger)
    {
        this.logger = logger;
    }

    [HttpGet]
    public IEnumerable<StudentDto> Get()
        => Array.Empty<StudentDto>();
}