using Aoaoao.Infra.ModelMapping;
using Domain.Models.Vacancy;
using Domain.Models.VacancyClaim;
using Domain.Services;
using Microsoft.AspNetCore.Mvc;
using WebApi.Dto.Vacancy;
using WebApi.Extensions;

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

    [HttpPost]
    [Route("")]
    public async Task<ActionResult<VacancyDto>> Create([FromBody] CreateVacancyRequestBody body)
    {
        var newVacancy =
            await vacancyService.CreateVacancy(body.Map<CreateVacancyRequest>(), HttpContext.RequestAborted);
        return Created($"/api/vacancies/{newVacancy.Id}", newVacancy.Map<VacancyDto>());
    }

    [HttpPost]
    [Route("{vacancyId:guid}/SendClaim")]
    public async Task SendClaim([FromRoute] Guid vacancyId)
    {
        var request = new SendVacancyClaimRequest
        {
            UserId = User.GetUserId(),
            VacancyId = vacancyId
        };
        await vacancyService.SendClaim(request, HttpContext.RequestAborted);
    }
}