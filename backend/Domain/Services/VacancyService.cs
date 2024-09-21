using Aoaoao.Infra.ModelMapping;
using DAL.Models.Vacancy;
using DAL.Repositories;
using Domain.Models.Vacancy;

namespace Domain.Services;

public interface IVacancyService
{
    Task<IReadOnlyCollection<VacancyModel>> FindAllVacancies(FindAllVacanciesQuery query,
        CancellationToken cancellationToken = default);
}

public class VacancyService : IVacancyService
{
    private readonly IVacancyRepository vacancyRepository;

    public VacancyService(IVacancyRepository vacancyRepository)
    {
        this.vacancyRepository = vacancyRepository;
    }

    public async Task<IReadOnlyCollection<VacancyModel>> FindAllVacancies(FindAllVacanciesQuery query,
        CancellationToken cancellationToken = default)
    {
        var vacancies = await vacancyRepository.FindAll(MapDomainToDatabaseFilter(query.Filter), cancellationToken);
        return vacancies.Map<VacancyModel[]>();
    }

    private static VacancyFilter MapDomainToDatabaseFilter(VacanciesDomainFilter domainFilter) =>
        new()
        {
            StartDateAfter = domainFilter.StartDateAfter,
            StartDateBefore = domainFilter.StartDateBefore,
            EndDateAfter = domainFilter.EndDateAfter,
            EndDateBefore = domainFilter.EndDateBefore,
            MinSalary = domainFilter.MinSalary,
            MaxSalary = domainFilter.MaxSalary,
            WorkSchedule = domainFilter.WorkSchedule != null ? domainFilter.Map<WorkSchedule[]>() : null
        };
}