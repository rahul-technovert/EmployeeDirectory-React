using EmployeeDIrectory.Concerns;

namespace EmployeeDIrectory.Contracts
{
    public interface IDepartmentService
    {
        ICollection<Department> GetDepartments();
    }
}
