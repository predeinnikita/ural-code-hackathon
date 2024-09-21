using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DAL.Config;

public class StudentConfig : IEntityTypeConfiguration<Student>
{
    public void Configure(EntityTypeBuilder<Student> entity)
    {
        entity
            .HasKey(e => e.Id);

        entity
            .HasOne(e => e.EducationalOrganization)
            .WithMany(e => e.Students)
            .HasForeignKey(e => e.EducationalOrganizationId);
    }
}