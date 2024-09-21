using DAL;
using DAL.Repositories;

using System.Reflection;
using LightInject;

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseLightInject(services => services.RegisterAssembly(Assembly.GetExecutingAssembly(), () => new PerRequestLifeTime(), (service, _) => service.IsInterface));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IAoaoaoDbContext>(provider =>
    new AoaoaoDbContext(provider.GetService<IConfiguration>().GetConnectionString("Aoaoao")));
builder.Services.AddSingleton<IUserRepository, UserRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();