using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EmployeeDIrectory.Migrations
{
    /// <inheritdoc />
    public partial class SeedingData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //Seed Departments
            migrationBuilder.Sql("INSERT INTO Department (DepartmentName) VALUES ('IT')");
            migrationBuilder.Sql("INSERT INTO Department (DepartmentName) VALUES ('MD')");
            migrationBuilder.Sql("INSERT INTO Department (DepartmentName) VALUES ('Human Resources')");
            migrationBuilder.Sql("INSERT INTO Department (DepartmentName) VALUES ('Sales')");

            // Seed JobTitles
            migrationBuilder.Sql("INSERT INTO JobTitle (JobTitleName) VALUES ('SharePoint Practice Head')");
            migrationBuilder.Sql("INSERT INTO JobTitle (JobTitleName) VALUES ('.Net Development Lead')");
            migrationBuilder.Sql("INSERT INTO JobTitle (JobTitleName) VALUES ('Recruiting Expert')");
            migrationBuilder.Sql("INSERT INTO JobTitle (JobTitleName) VALUES ('Bi Developer')");
            migrationBuilder.Sql("INSERT INTO JobTitle (JobTitleName) VALUES ('Business Analyst')");

            // Seed Offices
            migrationBuilder.Sql("INSERT INTO Office (OfficeName) VALUES ('Seatle')");
            migrationBuilder.Sql("INSERT INTO Office (OfficeName) VALUES ('India')");
        }



        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Department WHERE DepartmentName IN ('IT', 'MD', 'Human Resources', 'Sales')");
            migrationBuilder.Sql("DELETE FROM JobTitle WHERE JobTitleName IN ('SharePoint Practice Head', '.Net Development Lead', 'Recruiting Expert', 'Bi Developer', 'Business Analyst')");
            migrationBuilder.Sql("DELETE FROM Office WHERE OfficeName IN ('Seatle', 'India')");
        }
    }


    
    
}
