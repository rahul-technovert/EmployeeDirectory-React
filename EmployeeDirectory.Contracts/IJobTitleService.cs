using EmployeeDIrectory.Concerns;

namespace EmployeeDIrectory.Contracts
{
    public interface IJobTitleService
    {
        ICollection<JobTitle> GetJobTitles();
      
    }
}
