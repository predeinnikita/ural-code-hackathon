using System.ComponentModel.DataAnnotations.Schema;
using DAL.Models.Vacancy;

namespace DAL.Entities;

public sealed class Vacancy
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public decimal? Salary { get; set; }
    public WorkSchedule? WorkSchedule { get; set; }

    [Column("BusinessOrganizationId")] public Guid BusinessOrganizationId { get; set; }

    public BusinessOrganization BusinessOrganization { get; set; }
}