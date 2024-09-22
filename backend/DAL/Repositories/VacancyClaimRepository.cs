using DAL.Entities;

namespace DAL.Repositories;

public interface IVacancyClaimRepository
{
    Task Add(VacancyClaim vacancyClaim, CancellationToken cancellationToken);
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
}