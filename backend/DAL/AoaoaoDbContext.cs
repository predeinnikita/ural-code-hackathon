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
}