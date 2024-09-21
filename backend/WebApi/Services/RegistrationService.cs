using Aoaoao.Infra.ModelMapping;
using Domain.Helpers;
using Domain.Models.Student;
using Domain.Services;

namespace WebApi.Services;

public interface IRegistrationService
{
    Task RegisterStudent(StudentRegistrationInfoDto info);
    Task RegisterBusinessOrganization(BusinessOrganizationRegistrationInfoDto info);
    Task RegisterEducationalOrganization(EducationalOrganizationRegistrationInfoDto info);
}

public class RegistrationService : IRegistrationService // todo сделать валидации
{
    private readonly IStudentService studentService;

    public RegistrationService(IStudentService studentService)
    {
        this.studentService = studentService;
    }

    public async Task RegisterStudent(StudentRegistrationInfoDto info)
    {
        var studentModel = info.Map<StudentModel>();
        studentModel.PasswordHash = PasswordHashCalculator.Calculate(info.Password);
        await studentService.Create(studentModel);
    }

    public async Task RegisterBusinessOrganization(BusinessOrganizationRegistrationInfoDto info)
    {
        throw new NotImplementedException();
    }

    public async Task RegisterEducationalOrganization(EducationalOrganizationRegistrationInfoDto info)
    {
        throw new NotImplementedException();
    }
}