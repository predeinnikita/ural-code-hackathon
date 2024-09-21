namespace WebApi.Models;

public class BusinessOrganizationRegistrationInfoDto : AuthInfoDto
{
    public string FullName { get; set; }
    public string Description { get; set; }
    public string Inn { get; set; }
    public string Ogrn { get; set; }
    public string Address { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
}