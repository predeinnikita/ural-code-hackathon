using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApi.Services;

namespace WebApi.Controllers;

[AllowAnonymous]
[ApiController]
[Route("api/register")]
public class RegisterController : ControllerBase
{
    private readonly ILogger<StudentsController> logger;
    private readonly IRegistrationService registrationService;

    public RegisterController(ILogger<StudentsController> logger, IRegistrationService registrationService)
    {
        this.logger = logger;
        this.registrationService = registrationService;
    }

    [HttpPost("student")]
    public StatusCodeResult RegisterStudent([FromBody] StudentRegistrationInfoDto info)
    {
        registrationService.RegisterStudent(info);
        return Ok();
    }

    [HttpPost("business")]
    public StatusCodeResult RegisterBusinessOrganization([FromBody] BusinessOrganizationRegistrationInfoDto info)
    {
        registrationService.RegisterBusinessOrganization(info);
        return Ok();
    }

    [HttpPost("educational-org")]
    public StatusCodeResult RegisterEducationalOrganization([FromBody] EducationalOrganizationRegistrationInfoDto info)
    {
        registrationService.RegisterEducationalOrganization(info);
        return Ok();
    }
}