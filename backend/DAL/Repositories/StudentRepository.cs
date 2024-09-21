using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories;

public interface IStudentRepository
{
    Task<Student?> FindByLoginAndPassword(string login, string passwordHash, CancellationToken cancellationToken);
}

public class StudentRepository : IStudentRepository
{
    private readonly AoaoaoDbContext context;

    public StudentRepository(AoaoaoDbContext context)
    {
        this.context = context;
    }

    public async Task<Student?> FindByLoginAndPassword(string login, string passwordHash, CancellationToken cancellationToken)
        => await context.Students
            .Where(s => s.Login == login && s.PasswordHash == passwordHash)
            .FirstOrDefaultAsync(cancellationToken);
}