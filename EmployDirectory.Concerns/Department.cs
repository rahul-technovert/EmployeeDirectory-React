
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeDIrectory.Concerns
{
    [Table("Departments")]
    public class Department
    {
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
    }
}
