﻿namespace DAL.Entities;

public sealed class BusinessOrganization
{
    public Guid Id { get; set; }
    public string Login { get; set; }
    public string PasswordHash { get; set; }
    public string FullName { get; set; }
    public string Description { get; set; }
    public string Inn { get; set; }
    public string Ogrn { get; set; }
    public string Address { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    
    public ICollection<Vacancy>? Vacancies { get; set; }
}