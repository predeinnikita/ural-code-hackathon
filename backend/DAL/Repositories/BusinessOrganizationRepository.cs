using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories;

public interface IBusinessOrganizationRepository
{
    Task<BusinessOrganization?> FindById(Guid id, CancellationToken cancellationToken);
    Task<BusinessOrganization?> FindByLoginAndPassword(string login, string passwordHash, CancellationToken cancellationToken);
    Task<BusinessOrganization?> Create(BusinessOrganization businessOrganization, CancellationToken cancellationToken = default);
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

    public async Task<BusinessOrganization?> Create(BusinessOrganization businessOrganization, CancellationToken cancellationToken = default)
    {
        
        await context.BusinessOrganizations.AddAsync(businessOrganization, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
        return businessOrganization;
    }

    public Task<BusinessOrganization?> FindById(Guid id, CancellationToken cancellationToken)
    {
        return context.BusinessOrganizations
            .Where(x => x.Id == id)
            .FirstOrDefaultAsync(cancellationToken);
    }
}