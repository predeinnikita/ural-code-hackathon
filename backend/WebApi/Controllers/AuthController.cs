using System.Security.Claims;
using Aoaoao.Infra.ModelMapping;
using Domain.Models.AuthInfo;
using Domain.Models.BusinessOrganization;
using Domain.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApi.Extensions;

namespace WebApi.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IStudentService studentService;
    private readonly IBusinessOrganizationService businessOrganizationService;

    public AuthController(IStudentService studentService, IBusinessOrganizationService businessOrganizationService)
    {
        this.studentService = studentService;
        this.businessOrganizationService = businessOrganizationService;
    }

    [AllowAnonymous]
    [HttpPost("login")]
    public async Task<StatusCodeResult> Login([FromBody] AuthInfoDto authInfoDto)
    {
        var student = await studentService.FindByLoginAndPassword(authInfoDto.Map<AuthInfo>(), HttpContext.RequestAborted);
        BusinessOrganizationModel? businessOrganization = null;
        if (student == null)
            businessOrganization = await businessOrganizationService.FindByLoginAndPassword(authInfoDto.Map<AuthInfo>(), HttpContext.RequestAborted);
        if (student == null && businessOrganization == null)
            return Unauthorized();
        var userType = student != null ? UserType.Student : UserType.BusinessOrganization;
        var claims = new List<Claim>
        {
            new("userId", student?.Id.ToString() ?? businessOrganization?.Id.ToString() ?? string.Empty),
            new(ClaimsIdentity.DefaultNameClaimType, authInfoDto.Login),
            new(ClaimsIdentity.DefaultRoleClaimType, userType.ToReadable())
        };
        var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme, ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
        await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity));
        
        return Ok();
    }
    
    [HttpGet("info")]
    public void GetUserInfo()
    {
        var claims = HttpContext.User?.Identity as ClaimsPrincipal;
    }
}