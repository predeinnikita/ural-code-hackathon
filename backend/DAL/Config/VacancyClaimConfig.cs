using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DAL.Config;

public class VacancyClaimConfig : IEntityTypeConfiguration<VacancyClaim>
{
    public void Configure(EntityTypeBuilder<VacancyClaim> builder)
    {
        builder.HasKey(e => e.Id);

        builder
            .HasOne(e => e.Vacancy)
            .WithMany()
            .HasForeignKey(e => e.VacancyId);
    }
}