using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EmployeeDIrectory.Migrations
{
    /// <inheritdoc />
    public partial class Creatingemployeecardview : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
            CREATE VIEW EmployeeCardView AS
            SELECT Id, FirstName, LastName FROM Employees;
            ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP VIEW EmployeeCardView");
        }
    }
}
