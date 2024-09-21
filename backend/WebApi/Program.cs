using DAL;
using DAL.Repositories;
using System.Reflection;
using Aoaoao.Infra.ModelMapping;
using Domain.Services;
using LightInject;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseLightInject(services => services.RegisterAssembly(Assembly.GetExecutingAssembly(),
    () => new PerRequestLifeTime(), (service, _) => service.IsInterface));

// Add services to the container.
Mapper.ScanAndEnsureConfigurations(Assembly.GetExecutingAssembly());
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
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

app.Run();