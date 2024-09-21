using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[ApiController]
[Route("api/students")]
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