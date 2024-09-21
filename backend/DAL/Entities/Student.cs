using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Entities;

public sealed class Student
{
    public Guid Id { get; set; }
    public string Login { get; set; }
    public string PasswordHash { get; set; }
    public string FullName { get; set; }
    public string StudentIdNumber { get; set; }
    public string Speciality { get; set; }
    public int Grade { get; set; }
    public ExperienceLevel Experience { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    [Column("EducationalOrganizationId")] public Guid? EducationalOrganizationId { get; set; }

    public EducationalOrganization? EducationalOrganization { get; set; }
}