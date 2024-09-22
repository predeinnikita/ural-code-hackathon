namespace Domain.Models.Vacancy;

public class VacanciesDomainFilter
{
    public DateTime? StartDateAfter { get; set; }
    public DateTime? StartDateBefore { get; set; }

    public DateTime? EndDateAfter { get; set; }
    public DateTime? EndDateBefore { get; set; }

    public decimal? MinSalary { get; set; }
    public decimal? MaxSalary { get; set; }

    public WorkScheduleModel[]? WorkSchedule { get; set; }
}