using EmployeeDIrectory.Concerns;

namespace EmployeeDIrectory.Contracts
{
    public interface IOfficeService
    {
        ICollection<Office> GetOffices();
       

    }
}
