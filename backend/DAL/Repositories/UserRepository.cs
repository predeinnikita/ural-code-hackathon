using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories;

public interface IUserRepository
{
    Task<User?> FindById(int userId, CancellationToken cancellationToken);
}

public class UserRepository : IUserRepository
{
    private readonly IAoaoaoDbContext context;

    public UserRepository(IAoaoaoDbContext context)
    {
        this.context = context;
    }

    public async Task<User?> FindById(int userId, CancellationToken cancellationToken)
    {
        return await context.Users
            .Where(x => x.Id == userId)
            .FirstOrDefaultAsync(cancellationToken);
    }
}