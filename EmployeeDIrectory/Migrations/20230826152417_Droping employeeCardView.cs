using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EmployeeDIrectory.Migrations
{
    /// <inheritdoc />
    public partial class DropingemployeeCardView : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP VIEW EmployeeCardView");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
            CREATE VIEW EmployeeCardView AS
            SELECT Id, FirstName, LastName FROM Employees;
            ");
        }
    }
}
