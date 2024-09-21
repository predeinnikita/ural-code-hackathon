using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories;

public interface IBusinessOrganizationRepository
{
    Task<BusinessOrganization?> FindByLoginAndPassword(string login, string passwordHash, CancellationToken cancellationToken);
}

public class BusinessOrganizationRepository : IBusinessOrganizationRepository
{
    private readonly AoaoaoDbContext context;

    public BusinessOrganizationRepository(AoaoaoDbContext context)
    {
        this.context = context;
    }

    public async Task<BusinessOrganization?> FindByLoginAndPassword(string login, string passwordHash, CancellationToken cancellationToken)
        => await context.BusinessOrganizations
            .Where(s => s.Login == login && s.PasswordHash == passwordHash)
            .FirstOrDefaultAsync(cancellationToken);
}