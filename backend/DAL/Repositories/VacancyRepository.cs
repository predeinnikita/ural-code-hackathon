using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories;

public interface IVacancyRepository
{
    Task<IReadOnlyCollection<Vacancy>> FindAll(CancellationToken cancellationToken = default);
}

public sealed class VacancyRepository : IVacancyRepository
{
    private readonly IAoaoaoDbContext context;

    public VacancyRepository(IAoaoaoDbContext context)
    {
        this.context = context;
    }

    public async Task<IReadOnlyCollection<Vacancy>> FindAll(CancellationToken cancellationToken = default)
    {
        return await context.Vacancies
            .AsNoTracking()
            .Include(x => x.BusinessOrganization)
            .ToArrayAsync(cancellationToken);
    }
}