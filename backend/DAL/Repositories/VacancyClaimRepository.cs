using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories;

public interface IVacancyClaimRepository
{
    Task Add(VacancyClaim vacancyClaim, CancellationToken cancellationToken);
    Task<IReadOnlyCollection<VacancyClaim>> FindByStudentId(Guid studentId, CancellationToken cancellationToken);
}

public class VacancyClaimRepository : IVacancyClaimRepository
{
    private readonly AoaoaoDbContext context;

    public VacancyClaimRepository(AoaoaoDbContext context)
    {
        this.context = context;
    }

    public async Task Add(VacancyClaim vacancyClaim, CancellationToken cancellationToken)
    {
        await context.VacancyClaims.AddAsync(vacancyClaim, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
    }

    public async Task<IReadOnlyCollection<VacancyClaim>> FindByStudentId(Guid studentId, CancellationToken cancellationToken)
    {
        return await context.VacancyClaims
            .Where(x => x.StudentId == studentId)
            .ToArrayAsync(cancellationToken);
    }
}