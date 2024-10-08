﻿using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DAL.Config;

public class VacancyConfig : IEntityTypeConfiguration<Vacancy>
{
    public void Configure(EntityTypeBuilder<Vacancy> entity)
    {
        entity
            .HasKey(e => e.Id);

        entity
            .HasOne(e => e.BusinessOrganization)
            .WithMany(e => e.Vacancies)
            .HasForeignKey(e => e.BusinessOrganizationId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}