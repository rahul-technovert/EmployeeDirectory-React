using EmployeeDIrectory.Concerns;

namespace EmployeeDIrectory.Controllers.Resources
{
    public class EmployeeResource
    {
        public int Id { get; set; }
        public Department Department { get; set; }
        public Office Office { get; set; }
        public JobTitle JobTitle { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string SkypeId { get; set; }

    }
}
