namespace WebApi.Models;

public class EducationalOrganizationRegistrationInfoDto : AuthInfoDto
{
    public string FullName { get; set; }
    public string Address { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
}