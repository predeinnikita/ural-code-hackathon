using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Entities;

[Table("VacancyClaims")]
public class VacancyClaim
{
    public long Id { get; set; }
    public Guid VacancyId { get; set; }
    public Guid StudentId { get; set; }
    public bool? OrganizationAccepted { get; set; }
    public bool? StudentAccepted { get; set; }

    public Vacancy Vacancy { get; set; }
}