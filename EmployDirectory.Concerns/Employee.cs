using System.ComponentModel.DataAnnotations;

namespace EmployeeDIrectory.Concerns
{
    public class Employee
    {
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }
        [Required]
        [StringLength(50)]
        public string LastName { get; set; }
        [Required]
        [StringLength(10)]
        public string Phone { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [StringLength(50)]
        public string SkypeId { get; set; }

        public int DepartmentId { get; set; }
        public int OfficeId { get; set; }
        public int JobTitleId { get; set; }

        public Department Department { get; set; }
        public Office Office { get; set; }
        public JobTitle JobTitle { get; set; }


    }
}
