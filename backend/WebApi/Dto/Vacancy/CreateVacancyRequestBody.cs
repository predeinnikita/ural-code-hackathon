using System.ComponentModel.DataAnnotations;

namespace WebApi.Dto.Vacancy;

public sealed class CreateVacancyRequestBody
{
    [Required] public string Name { get; set; }
    public string? Description { get; set; }
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public decimal? Salary { get; set; }
    public WorkScheduleDto? WorkSchedule { get; set; }
    [Required] public Guid? BusinessOrganizationId { get; set; }
}