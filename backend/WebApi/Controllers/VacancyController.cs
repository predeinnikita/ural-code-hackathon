using Aoaoao.Infra.ModelMapping;
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
    public async Task<ActionResult<VacancyDto[]>> GetAllVacancies()
    {
        var result = await vacancyService.FindAllVacancies(HttpContext.RequestAborted);
        return Ok(result.Map<VacancyDto[]>());
    }
}