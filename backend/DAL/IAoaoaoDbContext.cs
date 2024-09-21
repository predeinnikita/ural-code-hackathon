using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL;

public interface IAoaoaoDbContext
{
    DbSet<User> Users { get; set; }
}