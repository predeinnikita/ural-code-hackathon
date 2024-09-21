using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Entities;

public sealed class Vacancy
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    [Column("BusinessOrganizationId")] public Guid BusinessOrganizationId { get; set; }

    public BusinessOrganization BusinessOrganization { get; set; }
}