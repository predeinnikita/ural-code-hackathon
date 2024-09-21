using DAL;
using DAL.Repositories;
using System.Reflection;
using Aoaoao.Infra.ModelMapping;
using Domain.Helpers;
using Domain.Services;
using LightInject;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseLightInject(services =>
{
    services.RegisterAssembly(Assembly.GetExecutingAssembly(), () => new PerRequestLifeTime(),
            (service, _) => service.IsInterface);
    services.RegisterAssembly(typeof(PasswordHashCalculator).Assembly, () => new PerRequestLifeTime(),
        (service, _) => service.IsInterface);
    services.RegisterAssembly(typeof(AoaoaoDbContext).Assembly, () => new PerRequestLifeTime(),
        (service, _) => service.IsInterface);
});

// Add services to the container.
Mapper.ScanAndEnsureConfigurations(Assembly.GetExecutingAssembly());
builder.Services.AddControllers();
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.Cookie.SameSite = SameSiteMode.Strict;
        options.Cookie.SecurePolicy = CookieSecurePolicy.None;
        options.LoginPath = "/api/auth/login";
    });
builder.Services.AddAuthorization(options => { options.FallbackPolicy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build(); });
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AoaoaoDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("Aoaoao")!));
builder.Services.AddSingleton<IUserRepository, UserRepository>();
builder.Services.AddSingleton<IVacancyRepository, VacancyRepository>();
builder.Services.AddSingleton<IVacancyService, VacancyService>();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();


app.UseAuthorization();

app.MapControllers();

using (var context = app.Services.GetService<AoaoaoDbContext>()!)
{
    context.Database.Migrate();
}

app.Run();