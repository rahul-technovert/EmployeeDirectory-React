using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeDIrectory.Concerns
{
    [Table("JobTitles")]
    public class JobTitle
    {
        public int JobTitleId { get; set; }
        public string JobTitleName { get; set; }
    }
}
