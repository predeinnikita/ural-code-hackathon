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
    public async Task<StatusCodeResult> RegisterStudent([FromBody] StudentRegistrationInfoDto info)
    {
        await registrationService.RegisterStudent(info);
        return Ok();
    }

    [HttpPost("business")]
    public async Task<StatusCodeResult> RegisterBusinessOrganization([FromBody] BusinessOrganizationRegistrationInfoDto info)
    {
        await registrationService.RegisterBusinessOrganization(info);
        return Ok();
    }

    [HttpPost("educational-org")]
    public async Task<StatusCodeResult> RegisterEducationalOrganization([FromBody] EducationalOrganizationRegistrationInfoDto info)
    {
        await registrationService.RegisterEducationalOrganization(info);
        return Ok();
    }
}