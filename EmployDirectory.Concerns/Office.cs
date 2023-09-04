using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeDIrectory.Concerns
{
    [Table("Offices")]
    public class Office
    {
        public int OfficeId { get; set; }
        public string  OfficeName { get; set; }
    }
}
