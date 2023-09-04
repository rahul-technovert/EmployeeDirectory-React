using EmployeeDIrectory.Concerns;
using Microsoft.EntityFrameworkCore;

namespace EmployeeDIrectory.Services.Contexts
{
    public class EmployeeDirectoryContext : DbContext
    {
        public EmployeeDirectoryContext(DbContextOptions<EmployeeDirectoryContext>options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Count> Counts { get; set; }
        public DbSet<EmployeeCard> EmployeeCards { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Office> Offices { get; set; }
        public DbSet<JobTitle> JobTitles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Count>().ToView("CategoryCountView").HasNoKey();
            modelBuilder.Entity<EmployeeCard>().ToView("EmployeeCardView").HasKey(c => c.Id);
        }


    }
}
