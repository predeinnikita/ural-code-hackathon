using DAL.Entities;
using Domain.Models.Vacancy;
using Mapster;

namespace Domain.MapsterConfigs;

public class CreateVacancyRequestConfig : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config
            .NewConfig<CreateVacancyRequest, Vacancy>()
            .Ignore(x => x.Id)
            .Ignore(x => x.BusinessOrganization);
    }
}