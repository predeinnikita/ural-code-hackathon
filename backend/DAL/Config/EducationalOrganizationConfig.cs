using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DAL.Config;

public class EducationalOrganizationConfig : IEntityTypeConfiguration<EducationalOrganization>
{
    public void Configure(EntityTypeBuilder<EducationalOrganization> entity)
    {
        entity
            .HasKey(e => e.Id);

        entity
            .HasMany(e => e.Students)
            .WithOne(e => e.EducationalOrganization)
            .HasForeignKey(e => e.EducationalOrganizationId);
    }
}