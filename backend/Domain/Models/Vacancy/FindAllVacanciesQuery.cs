using Domain.Models.Common;

namespace Domain.Models.Vacancy;

public class FindAllVacanciesQuery
{
    public VacanciesDomainFilter Filter { get; set; }
    public PageParams? PageParams { get; set; }
}