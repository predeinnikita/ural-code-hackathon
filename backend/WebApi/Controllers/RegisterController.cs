using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[AllowAnonymous]
[ApiController]
[Route("[controller]")]
public class RegisterController : ControllerBase
{
    private readonly ILogger<StudentsController> logger;
    private readonly IRegistrationHelper registrationHelper;

    public RegisterController(ILogger<StudentsController> logger, IRegistrationHelper registrationHelper)
    {
        this.logger = logger;
        this.registrationHelper = registrationHelper;
    }

    [HttpPost("student")]
    public StatusCodeResult RegisterStudent([FromBody] StudentRegistrationInfoDto info)
    {
        registrationHelper.RegisterStudent(info);
        return Ok();
    }

    [HttpPost("business")]
    public StatusCodeResult RegisterBusinessOrganization([FromBody] BusinessOrganizationRegistrationInfoDto info)
    {
        registrationHelper.RegisterBusinessOrganization(info);
        return Ok();
    }

    [HttpPost("educational-org")]
    public StatusCodeResult RegisterEducationalOrganization([FromBody] EducationalOrganizationRegistrationInfoDto info)
    {
        registrationHelper.RegisterEducationalOrganization(info);
        return Ok();
    }
}