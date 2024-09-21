namespace WebApi.Helpers;

public interface IRegistrationHelper
{
    void RegisterStudent(StudentRegistrationInfoDto info);
    void RegisterBusinessOrganization(BusinessOrganizationRegistrationInfoDto info);
    void RegisterEducationalOrganization(EducationalOrganizationRegistrationInfoDto info);
}

public class RegistrationHelper : IRegistrationHelper // todo сделать валидации
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