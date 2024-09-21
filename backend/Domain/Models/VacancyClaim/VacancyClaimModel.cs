namespace Domain.Models.VacancyClaim;

public class VacancyClaimModel
{
    public long Id { get; set; }
    public Guid StudentId { get; set; }
    public bool? OrganizationAccepted { get; set; }
    public bool? StudentAccepted { get; set; }

    public VacancyClaimModel Vacancy { get; set; }
}