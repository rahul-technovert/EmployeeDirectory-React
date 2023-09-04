using EmployeeDIrectory.Services;
using EmployeeDIrectory.Services.Contexts;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<EmployeeDirectoryContext>(options =>
                    options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

builder.Services.AddScoped<EmployeeServices>();
builder.Services.AddScoped<DepartmentServices>();
builder.Services.AddScoped<OfficeServices>();
builder.Services.AddScoped<JobTitleServices>();

builder.Services.AddCors(options => 
                    options.AddPolicy("AllowAnyOrigin",
                    builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    app.UseCors("AllowAnyOrigin");
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
