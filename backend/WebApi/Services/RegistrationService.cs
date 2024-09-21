namespace WebApi.Services;

public interface IRegistrationService
{
    void RegisterStudent(StudentRegistrationInfoDto info);
    void RegisterBusinessOrganization(BusinessOrganizationRegistrationInfoDto info);
    void RegisterEducationalOrganization(EducationalOrganizationRegistrationInfoDto info);
}

public class RegistrationService : IRegistrationService // todo сделать валидации
{
    public void RegisterStudent(StudentRegistrationInfoDto info)
    {
        throw new NotImplementedException();
    }

    public void RegisterBusinessOrganization(BusinessOrganizationRegistrationInfoDto info)
    {
        throw new NotImplementedException();
    }

    public void RegisterEducationalOrganization(EducationalOrganizationRegistrationInfoDto info)
    {
        throw new NotImplementedException();
    }
}