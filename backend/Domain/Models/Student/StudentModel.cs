namespace Domain.Models.Student;

public class StudentModel
{
    public Guid Id { get; set; }
    public string FullName { get; set; }
    public string StudentIdNumber { get; set; }
    public string Speciality { get; set; }
    public int Grade { get; set; }
    public ExperienceLevel Experience { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public string EducationalOrganizationFullName { get; set; }
}