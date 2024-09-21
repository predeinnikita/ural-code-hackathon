namespace WebApi.Dto.Vacancy;

public sealed class GetVacanciesRequestParams
{
    public DateTime? StartDateAfter { get; set; }
    public DateTime? StartDateBefore { get; set; }

    public DateTime? EndDateAfter { get; set; }
    public DateTime? EndDateBefore { get; set; }

    public decimal? MinSalary { get; set; }
    public decimal? MaxSalary { get; set; }

    public WorkScheduleDto[]? WorkSchedule { get; set; }

    public int? Offset { get; set; }
    public int? RowsCount { get; set; }
}