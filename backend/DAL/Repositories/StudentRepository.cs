using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories;

public interface IStudentRepository
{
    Task<Student?> FindByLoginAndPassword(string login, string passwordHash, CancellationToken cancellationToken);
    Task<Student?> Create(Student student, CancellationToken cancellationToken = default);
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

    public async Task<Student?> Create(Student student, CancellationToken cancellationToken = default)
    {
        await context.Students.AddAsync(student, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
        return student;
    }
}