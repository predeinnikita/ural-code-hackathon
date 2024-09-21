using Domain.Models.Vacancy;
using Mapster;
using WebApi.Dto.Vacancy;

namespace WebApi.MapsterConfigs;

public class GetVacanciesRequestParamsConfig : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config
            .NewConfig<GetVacanciesRequestParams, FindAllVacanciesQuery>()
            .Map(dest => dest.Filter, source => source)
            .Map(dest => dest.PageParams, source => source);
    }
}