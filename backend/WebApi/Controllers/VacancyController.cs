using Aoaoao.Infra.ModelMapping;
using Domain.Models.Vacancy;
using Domain.Services;
using Microsoft.AspNetCore.Mvc;
using WebApi.Dto.Vacancy;

namespace WebApi.Controllers;

[ApiController]
[Route("api/vacancies")]
public class VacancyController : ControllerBase
{
    private readonly IVacancyService vacancyService;

    public VacancyController(IVacancyService vacancyService)
    {
        this.vacancyService = vacancyService;
    }

    [HttpGet]
    [Route("")]
    public async Task<ActionResult<VacancyDto[]>> GetAllVacancies([FromQuery] GetVacanciesRequestParams requestParams)
    {
        var domainRequest = requestParams.Map<FindAllVacanciesQuery>();
        var result = await vacancyService.FindAllVacancies(domainRequest, HttpContext.RequestAborted);
        return Ok(result.Map<VacancyDto[]>());
    }
}