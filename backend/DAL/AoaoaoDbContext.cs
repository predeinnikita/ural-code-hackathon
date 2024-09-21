using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL;

public sealed class AoaoaoDbContext : DbContext
{
    public AoaoaoDbContext(DbContextOptions<AoaoaoDbContext> options) : base(options)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        AppContext.SetSwitch("Npgsql.DisableDateTimeInfinityConversions", true);
    }

    public DbSet<User> Users { get; set; }
    public DbSet<BusinessOrganization> BusinessOrganizations { get; set; }
    public DbSet<Vacancy> Vacancies { get; set; }
    public DbSet<Student> Students { get; set; }
    public DbSet<EducationalOrganization> EducationalOrganizations { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AoaoaoDbContext).Assembly);
    }
}