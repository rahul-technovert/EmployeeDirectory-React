using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EmployeeDIrectory.Migrations
{
    /// <inheritdoc />
    public partial class AddingOfficeinEmployeeCardView : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP VIEW IF EXISTS EmployeeCardView");

            migrationBuilder.Sql(@"
            CREATE VIEW EmployeeCardView AS
            SELECT Id, FirstName, LastName, DepartmentId, JobTitleId, OfficeId FROM Employees;
            ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP VIEW IF EXISTS EmployeeCardView");

            migrationBuilder.Sql(@"
            CREATE VIEW EmployeeCardView AS
            SELECT Id, FirstName, LastName, DepartmentId, JobTitleId FROM Employees;
            ");
        }
    }
}
