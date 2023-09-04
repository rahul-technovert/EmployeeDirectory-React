using EmployeeDIrectory.Concerns;

namespace EmployeeDIrectory.Contracts
{
    public interface IEmployeeService
    {
        ICollection<EmployeeCard> GetAll();
        ICollection<Count> GetCounts();
        Employee GetEmployee(int id);
        Employee CreateEmployee(Employee employee);
        Employee UpdateEmployee(int id, Employee employee);
        bool RemoveEmployee(int id);
      
    }
}
