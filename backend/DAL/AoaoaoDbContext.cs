using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL;

public sealed class AoaoaoDbContext : DbContext, IAoaoaoDbContext
{
    public AoaoaoDbContext(string connectionString) : base(
        new DbContextOptionsBuilder<AoaoaoDbContext>()
            .UseNpgsql(connectionString).Options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<BusinessOrganization> BusinessOrganizations { get; set; }
    public DbSet<Vacancy> Vacancies { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AoaoaoDbContext).Assembly);
    }
}