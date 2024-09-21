namespace WebApi.Dto.Vacancy;

public sealed class VacancyClaimDto
{
    public long Id { get; set; }
    public Guid VacancyId { get; set; }
    public Guid StudentId { get; set; }
    public bool? OrganizationAccepted { get; set; }
    public bool? StudentAccepted { get; set; }
}