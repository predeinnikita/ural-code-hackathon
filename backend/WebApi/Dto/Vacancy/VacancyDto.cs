using WebApi.Dto.BusinessOrganization;

namespace WebApi.Dto.Vacancy;

public class VacancyDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public decimal? Salary { get; set; }
    public WorkScheduleDto? WorkSchedule { get; set; }
    public BusinessOrganizationDto BusinessOrganization { get; set; }
}