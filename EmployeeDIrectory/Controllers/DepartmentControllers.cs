using EmployeeDIrectory.Concerns;
using EmployeeDIrectory.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeDIrectory.Controllers
{
    [Route("api/departments")]
    [EnableCors("AllowAnyOrigin")]
    public class DepartmentControllers : ControllerBase
    {
        private DepartmentServices _services { get; set; }
        public DepartmentControllers(DepartmentServices services)
        {
            this._services = services;
        }

        [HttpGet]
        public ICollection<Department> GetDepartments()
        {
            return _services.GetDepartments();
        }
    }
}
