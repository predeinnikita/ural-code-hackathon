using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL;

public interface IAoaoaoDbContext
{
    DbSet<User> Users { get; set; }
    DbSet<BusinessOrganization> BusinessOrganizations { get; set; }
    DbSet<Vacancy> Vacancies { get; set; }
}