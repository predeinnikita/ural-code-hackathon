namespace DAL.Entities;

public sealed class Vacancy
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public Guid BusinessOrganizationId { get; set; }

    public BusinessOrganization BusinessOrganization { get; set; }
}