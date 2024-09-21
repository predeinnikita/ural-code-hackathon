using Aoaoao.Infra.ModelMapping;
using DAL.Entities;
using DAL.Models.Vacancy;
using DAL.Repositories;
using Domain.Models.Vacancy;

namespace Domain.Services;

public interface IVacancyService
{
    Task<IReadOnlyCollection<VacancyModel>> FindAllVacancies(FindAllVacanciesQuery query,
        CancellationToken cancellationToken = default);

    Task<VacancyModel> CreateVacancy(CreateVacancyRequest request, CancellationToken cancellationToken);
}

public class VacancyService : IVacancyService
{
    private readonly IVacancyRepository vacancyRepository;
    private readonly IBusinessOrganizationRepository businessOrganizationRepository;

    public VacancyService(IVacancyRepository vacancyRepository,
        IBusinessOrganizationRepository businessOrganizationRepository)
    {
        this.vacancyRepository = vacancyRepository;
        this.businessOrganizationRepository = businessOrganizationRepository;
    }

    public async Task<IReadOnlyCollection<VacancyModel>> FindAllVacancies(FindAllVacanciesQuery query,
        CancellationToken cancellationToken = default)
    {
        var vacancies = await vacancyRepository.FindAll(MapDomainToDatabaseFilter(query.Filter), cancellationToken);
        return vacancies.Map<VacancyModel[]>();
    }

    public async Task<VacancyModel> CreateVacancy(CreateVacancyRequest request,
        CancellationToken cancellationToken = default)
    {
        var businessOrganization =
            await businessOrganizationRepository.FindById(request.BusinessOrganizationId, cancellationToken);
        if (businessOrganization is null)
        {
            throw new Exception();
        }

        var newVacancy = request.Map<Vacancy>();
        await vacancyRepository.Add(newVacancy, cancellationToken);
        return newVacancy.Map<VacancyModel>();
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