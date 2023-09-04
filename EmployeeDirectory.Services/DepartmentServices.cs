using EmployeeDIrectory.Concerns;
using EmployeeDIrectory.Contracts;
using EmployeeDIrectory.Services.Contexts;

namespace EmployeeDIrectory.Services
{
    public class DepartmentServices : IDepartmentService
    {
        private EmployeeDirectoryContext _directoryContext;
        public DepartmentServices(EmployeeDirectoryContext directoryContext)
        {
            this._directoryContext = directoryContext;  
        }

        public ICollection<Department> GetDepartments()
        {
            return _directoryContext.Departments.ToList();
        }
    }
}
