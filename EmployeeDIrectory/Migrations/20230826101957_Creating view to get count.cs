using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EmployeeDIrectory.Migrations
{
    /// <inheritdoc />
    public partial class Creatingviewtogetcount : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
                CREATE VIEW CategoryCountView AS
                SELECT 'Office' AS Category, o.OfficeName AS Name, COUNT(*) AS Total FROM employees e
                JOIN Offices o on o.OfficeId = e.OfficeId
                GROUP BY o.OfficeName
                union 
                SELECT 'Department' , d.DepartmentName, COUNT(*) AS Total FROM employees e
                JOIN Departments d on d.DepartmentId = e.DepartmentId
                GROUP BY d.DepartmentName
                union
                SELECT 'JobTitle', j.JobTitleName, COUNT(*) AS Total FROM employees e
                JOIN JobTitles j on j.JobTitleId = e.JobTitleId
                GROUP BY j.JobTitleName;
            ");

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
                    DROP VIEW CategoryCountView;
            ");
        }
    }
}
