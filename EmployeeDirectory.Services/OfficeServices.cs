using EmployeeDIrectory.Concerns;
using EmployeeDIrectory.Contracts;
using EmployeeDIrectory.Services.Contexts;

namespace EmployeeDIrectory.Services
{
    public class OfficeServices : IOfficeService
    {
        private EmployeeDirectoryContext _directoryContext;
        public OfficeServices(EmployeeDirectoryContext directoryContext)
        {
            this._directoryContext = directoryContext;
        }

        public ICollection<Office> GetOffices()
        {
            return _directoryContext.Offices.ToList();
        }
    }
}
