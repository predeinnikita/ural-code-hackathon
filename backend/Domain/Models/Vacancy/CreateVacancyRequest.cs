namespace Domain.Models.Vacancy;

public sealed class CreateVacancyRequest
{
    public string Name { get; set; }
    public string? Description { get; set; }
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public decimal? Salary { get; set; }
    public WorkScheduleModel? WorkSchedule { get; set; }
    public Guid BusinessOrganizationId { get; set; }
}