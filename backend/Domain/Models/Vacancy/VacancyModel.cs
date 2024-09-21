using Domain.Models.BusinessOrganization;

namespace Domain.Models.Vacancy;

public class VacancyModel
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public decimal? Salary { get; set; }
    public WorkScheduleModel? WorkSchedule { get; set; }
    public BusinessOrganizationModel BusinessOrganization { get; set; }
}