using EmployeeDIrectory.Concerns;
using EmployeeDIrectory.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeDIrectory.Controllers
{
    [Route("api/offices")]
    [EnableCors("AllowAnyOrigin")]
    public class OfficeControllers : ControllerBase
    {
        private OfficeServices _officeServices { get; set; }
        public OfficeControllers(OfficeServices officeServices) 
        {
            this._officeServices = officeServices;
        }

        [HttpGet]
        public ICollection<Office> GetOffices()
        {
            return _officeServices.GetOffices();
        }
    }
}
