using AutoMapper;
using EmployeeDIrectory.Concerns;
using EmployeeDIrectory.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using EmployeeDIrectory.Controllers.Resources;

namespace EmployeeDIrectory.Controllers
{
    [EnableCors("AllowAnyOrigin")]
    [Route("api/employees")]
    public class EmployeeControllers : ControllerBase
    {
        private readonly IMapper mapper;
        private EmployeeServices _services;
        public EmployeeControllers(IMapper mapper, EmployeeServices services)
        {
            this.mapper = mapper;
            this._services = services;
        }

        [HttpGet("cards")]
        public IActionResult GetCards()
        {
            return Ok(this._services.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetEmployee(int id)
        {
            Employee employee = _services.GetEmployee(id);
            return Ok(mapper.Map<Employee, EmployeeResource>(employee));
        }

        [HttpGet("counts")]
        public IActionResult GetCounts(int id)
        {
            return Ok(_services.GetCounts());
        }

        [HttpPost]
        public IActionResult CreateEmployee([FromBody] SaveEmployeeResource employeeResource)
        {
            Employee employee = mapper.Map<SaveEmployeeResource, Employee>(employeeResource);
            employee = _services.CreateEmployee(employee);

            var result = mapper.Map<Employee, EmployeeResource>(employee);
            return Ok(result);
        }    
        
        [HttpPut("{id}")]
        public IActionResult UpdateEmployee(int id, [FromBody] SaveEmployeeResource employeeResource)
        {
            Employee dbEmployee = _services.GetEmployee(id);
            Employee employee = mapper.Map<SaveEmployeeResource, Employee>(employeeResource, dbEmployee);

            dbEmployee = _services.UpdateEmployee(id, employee);

            if (dbEmployee == null)
                return NotFound();

            var result = mapper.Map<Employee, EmployeeResource>(dbEmployee);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            bool isDeleted = _services.RemoveEmployee(id);

            if (isDeleted)
                return Ok();

            return NotFound();
        }

    }
}
