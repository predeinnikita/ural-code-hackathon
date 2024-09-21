using WebApi.Dto.BusinessOrganization;

namespace WebApi.Dto.Vacancy;

public class VacancyDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public BusinessOrganizationDto BusinessOrganization { get; set; }
}