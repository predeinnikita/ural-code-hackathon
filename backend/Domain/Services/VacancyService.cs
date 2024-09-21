using DAL.Repositories;
using Domain.Models.BusinessOrganization;
using Domain.Models.Vacancy;

namespace Domain.Services;

public interface IVacancyService
{
    Task<IReadOnlyCollection<VacancyModel>> FindAllVacancies(CancellationToken cancellationToken = default);
}

public class VacancyService : IVacancyService
{
    private readonly IVacancyRepository vacancyRepository;

    public VacancyService(IVacancyRepository vacancyRepository)
    {
        this.vacancyRepository = vacancyRepository;
    }

    public async Task<IReadOnlyCollection<VacancyModel>> FindAllVacancies(CancellationToken cancellationToken = default)
    {
        var vacancies = await vacancyRepository.FindAll(cancellationToken);
        return vacancies
            .Select(x => new VacancyModel
            {
                Id = x.Id,
                Name = x.Name,
                BusinessOrganization = new BusinessOrganizationModel
                {
                    Id = x.BusinessOrganization.Id,
                    Name = x.BusinessOrganization.Name
                }
            })
            .ToArray();
    }
}