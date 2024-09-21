namespace Domain.Models.VacancyClaim;

public sealed class SendVacancyClaimRequest
{
    public Guid UserId { get; set; }
    public Guid VacancyId { get; set; }
}