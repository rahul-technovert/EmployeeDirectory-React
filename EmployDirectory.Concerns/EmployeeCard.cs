using EmployeeDIrectory.Concerns;

namespace EmployeeDIrectory.Concerns
{
    public class EmployeeCard
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Department Department { get; set; }
        public JobTitle JobTitle { get; set; }
        public Office Office { get; set; }

    }
}
