namespace DAL.Entities;

public class EducationalOrganization
{
    public Guid Id { get; set; }
    public string Login { get; set; }
    public string PasswordHash { get; set; }
    public string FullName { get; set; }
    public string Address { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }

    public ICollection<Student>? Students { get; set; }
}