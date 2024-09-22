using Aoaoao.Infra.ModelMapping;
using DAL.Entities;
using Domain.Helpers;
using Domain.Models.BusinessOrganization;
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
    private readonly IBusinessOrganizationService businessOrganizationService;

    public RegistrationService(IStudentService studentService, IBusinessOrganizationService businessOrganizationService)
    {
        this.studentService = studentService;
        this.businessOrganizationService = businessOrganizationService;
    }

    public async Task RegisterStudent(StudentRegistrationInfoDto info)
    {
        var model = info.Map<StudentModel>();
        model.PasswordHash = PasswordHashCalculator.Calculate(info.Password);
        await studentService.Create(model);
    }

    public async Task RegisterBusinessOrganization(BusinessOrganizationRegistrationInfoDto info)
    {
        var model = info.Map<BusinessOrganizationModel>();
        model.PasswordHash = PasswordHashCalculator.Calculate(info.Password);
        await businessOrganizationService.Create(model);
    }

    public async Task RegisterEducationalOrganization(EducationalOrganizationRegistrationInfoDto info)
    {
        throw new NotImplementedException();
    }
}