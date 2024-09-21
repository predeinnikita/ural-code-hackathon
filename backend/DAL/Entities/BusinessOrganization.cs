namespace DAL.Entities;

public sealed class BusinessOrganization
{
    public Guid Id { get; set; }
    public string Name { get; set; }

    public ICollection<Vacancy>? Vacancies { get; set; }
}