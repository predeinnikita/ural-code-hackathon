using DAL.Entities;
using DAL.Models.Vacancy;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories;

public interface IVacancyRepository
{
    Task<IReadOnlyCollection<Vacancy>> FindAll(VacancyFilter filter, CancellationToken cancellationToken = default);
    Task Add(Vacancy vacancy, CancellationToken cancellationToken);
}

public sealed class VacancyRepository : IVacancyRepository
{
    private readonly AoaoaoDbContext context;

    public VacancyRepository(AoaoaoDbContext context)
    {
        this.context = context;
    }

    public async Task<IReadOnlyCollection<Vacancy>> FindAll(VacancyFilter filter,
        CancellationToken cancellationToken = default)
    {
        var queryable = context.Vacancies
            .AsNoTracking()
            .Include(x => x.BusinessOrganization)
            .AsQueryable();
        queryable = ApplyFilter(queryable, filter);
        return await queryable.ToArrayAsync(cancellationToken);
    }

    public async Task Add(Vacancy vacancy, CancellationToken cancellationToken)
    {
        await context.Vacancies.AddAsync(vacancy, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
    }

    private static IQueryable<Vacancy> ApplyFilter(IQueryable<Vacancy> queryable, VacancyFilter filter)
    {
        if (filter.StartDateAfter.HasValue)
        {
            queryable = queryable.Where(x => x.StartDate >= filter.StartDateAfter.Value);
        }

        if (filter.StartDateBefore.HasValue)
        {
            queryable = queryable.Where(x => x.StartDate <= filter.StartDateBefore.Value);
        }

        if (filter.EndDateAfter.HasValue)
        {
            queryable = queryable.Where(x => x.EndDate >= filter.EndDateAfter.Value);
        }

        if (filter.EndDateBefore.HasValue)
        {
            queryable = queryable.Where(x => x.EndDate <= filter.EndDateBefore.Value);
        }

        if (filter.MinSalary.HasValue)
        {
            queryable = queryable.Where(x => x.Salary >= filter.MinSalary.Value);
        }

        if (filter.MaxSalary.HasValue)
        {
            queryable = queryable.Where(x => x.Salary >= filter.MaxSalary.Value);
        }

        if (filter.WorkSchedule != null)
        {
            queryable = queryable.Where(x => filter.WorkSchedule.Contains(x.WorkSchedule!.Value));
        }

        return queryable;
    }
}