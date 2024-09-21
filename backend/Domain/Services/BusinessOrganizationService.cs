using Aoaoao.Infra.ModelMapping;
using DAL.Repositories;
using Domain.Helpers;
using Domain.Models.AuthInfo;
using Domain.Models.BusinessOrganization;
using Domain.Models.Student;

namespace Domain.Services;

public interface IBusinessOrganizationService
{
    Task<BusinessOrganizationModel?> FindByLoginAndPassword(AuthInfo authInfo, CancellationToken cancellationToken = default);
}

public class BusinessOrganizationService : IBusinessOrganizationService
{
    private readonly IBusinessOrganizationRepository businessOrganizationRepository;

    public BusinessOrganizationService(IBusinessOrganizationRepository businessOrganizationRepository)
    {
        this.businessOrganizationRepository = businessOrganizationRepository;
    }

    public async Task<BusinessOrganizationModel?> FindByLoginAndPassword(AuthInfo authInfo, CancellationToken cancellationToken = default)
    {
        var businessOrganization = await businessOrganizationRepository.FindByLoginAndPassword(authInfo.Login, PasswordHashCalculator.Calculate(authInfo.Password), cancellationToken);
        return businessOrganization?.Map<BusinessOrganizationModel>();
    }
}