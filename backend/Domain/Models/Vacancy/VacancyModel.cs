using Domain.Models.BusinessOrganization;

namespace Domain.Models.Vacancy;

public class VacancyModel
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public BusinessOrganizationModel BusinessOrganization { get; set; }
}