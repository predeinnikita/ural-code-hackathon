using DAL;
using DAL.Repositories;

using System.Reflection;
using Aoaoao.Infra.ModelMapping;
using Domain.Services;
using LightInject;

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseLightInject(services => services.RegisterAssembly(Assembly.GetExecutingAssembly(), () => new PerRequestLifeTime(), (service, _) => service.IsInterface));

// Add services to the container.
Mapper.ScanAndEnsureConfigurations(Assembly.GetExecutingAssembly());
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IAoaoaoDbContext>(provider =>
    new AoaoaoDbContext(provider.GetService<IConfiguration>().GetConnectionString("Aoaoao")));
builder.Services.AddSingleton<IUserRepository, UserRepository>();
builder.Services.AddSingleton<IVacancyRepository, VacancyRepository>();
builder.Services.AddSingleton<IVacancyService, VacancyService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();