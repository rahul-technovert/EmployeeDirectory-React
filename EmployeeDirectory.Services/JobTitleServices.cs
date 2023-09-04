using EmployeeDIrectory.Concerns;
using EmployeeDIrectory.Contracts;
using EmployeeDIrectory.Services.Contexts;

namespace EmployeeDIrectory.Services
{
    public class JobTitleServices : IJobTitleService
    {
        private EmployeeDirectoryContext _directoryContext;
        public JobTitleServices(EmployeeDirectoryContext directoryContext)
        {
            this._directoryContext = directoryContext;
        }

        public ICollection<JobTitle> GetJobTitles()
        {
            return _directoryContext.JobTitles.ToList();
        }
    }
}
