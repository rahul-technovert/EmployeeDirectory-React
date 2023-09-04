using EmployeeDIrectory.Concerns;
using EmployeeDIrectory.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeDIrectory.Controllers 
{
    [Route("api/jobTitles")]
    [EnableCors("AllowAnyOrigin")]
    public class JobTitleControllers : ControllerBase
    {
        private JobTitleServices _services { get; set; }
        public JobTitleControllers(JobTitleServices services)
        {
            this._services = services;
        }

        [HttpGet]
        public ICollection<JobTitle> GetJobTitles()
        {
            return _services.GetJobTitles();
        }
    }
}
