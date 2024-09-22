using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DAL.Config;

public class BusinessOrganizationConfig : IEntityTypeConfiguration<BusinessOrganization>
{
    public void Configure(EntityTypeBuilder<BusinessOrganization> entity)
    {
        entity
            .HasKey(e => e.Id);
    }
}