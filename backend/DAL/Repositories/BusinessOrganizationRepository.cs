using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories;

public interface IBusinessOrganizationRepository
{
    Task<BusinessOrganization?> FindById(Guid id, CancellationToken cancellationToken);
}

public class BusinessOrganizationRepository : IBusinessOrganizationRepository
{
    private readonly AoaoaoDbContext dbContext;

    public BusinessOrganizationRepository(AoaoaoDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public Task<BusinessOrganization?> FindById(Guid id, CancellationToken cancellationToken)
    {
        return dbContext.BusinessOrganizations
            .Where(x => x.Id == id)
            .FirstOrDefaultAsync(cancellationToken);
    }
}