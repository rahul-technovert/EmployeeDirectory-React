using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EmployeeDIrectory.Migrations
{
    /// <inheritdoc />
    public partial class Seedingdata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //Seed Departments
            migrationBuilder.Sql("INSERT INTO Departments (DepartmentName) VALUES ('IT')");
            migrationBuilder.Sql("INSERT INTO Departments (DepartmentName) VALUES ('MD')");
            migrationBuilder.Sql("INSERT INTO Departments (DepartmentName) VALUES ('Human Resources')");
            migrationBuilder.Sql("INSERT INTO Departments (DepartmentName) VALUES ('Sales')");

            // Seed JobTitles
            migrationBuilder.Sql("INSERT INTO JobTitles (JobTitleName) VALUES ('SharePoint Practice Head')");
            migrationBuilder.Sql("INSERT INTO JobTitles (JobTitleName) VALUES ('.Net Development Lead')");
            migrationBuilder.Sql("INSERT INTO JobTitles (JobTitleName) VALUES ('Recruiting Expert')");
            migrationBuilder.Sql("INSERT INTO JobTitles (JobTitleName) VALUES ('Bi Developer')");
            migrationBuilder.Sql("INSERT INTO JobTitles (JobTitleName) VALUES ('Business Analyst')");

            // Seed Offices
            migrationBuilder.Sql("INSERT INTO Offices (OfficeName) VALUES ('Seatle')");
            migrationBuilder.Sql("INSERT INTO Offices (OfficeName) VALUES ('India')");

            //Seed Employee

            migrationBuilder.Sql(@"
            INSERT INTO Employees (FirstName, LastName, Email, Phone, SkypeId, OfficeId, DepartmentId, JobTitleId)
            VALUES ('Rames', 'Shukla', 'ram@gmail.com', '8787001234', 'uasyd@34', 
                    (SELECT OfficeId FROM Offices WHERE OfficeName = 'India'),
                    (SELECT DepartmentId FROM Departments WHERE DepartmentName = 'Sales'),
                    (SELECT JobTitleId FROM JobTitles WHERE JobTitleName = 'Bi Developer'));
            "); 
            
            migrationBuilder.Sql(@"
            INSERT INTO Employees (FirstName, LastName, Email, Phone, SkypeId, OfficeId, DepartmentId, JobTitleId)
            VALUES ('John', 'Doe', 'john@example.com', '1234567890', 'john.skype', 
                    (SELECT OfficeId FROM Offices WHERE OfficeName = 'Seatle'),
                    (SELECT DepartmentId FROM Departments WHERE DepartmentName = 'IT'),
                    (SELECT JobTitleId FROM JobTitles WHERE JobTitleName = '.Net Development Lead'));

            ");   
            
            migrationBuilder.Sql(@"
             INSERT INTO Employees (FirstName, LastName, Email, Phone, SkypeId, OfficeId, DepartmentId, JobTitleId)
             VALUES ('Jane', 'Smith', 'jane@example.com', '9876543210', 'jane.skype', 
                    (SELECT OfficeId FROM Offices WHERE OfficeName = 'India'),
                    (SELECT DepartmentId FROM Departments WHERE DepartmentName = 'Human Resources'),
                    (SELECT JobTitleId FROM JobTitles WHERE JobTitleName = 'Recruiting Expert'));
            ");
        }



        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Departments WHERE DepartmentName IN ('IT', 'MD', 'Human Resources', 'Sales')");
            migrationBuilder.Sql("DELETE FROM JobTitles WHERE JobTitleName IN ('SharePoint Practice Head', '.Net Development Lead', 'Recruiting Expert', 'Bi Developer', 'Business Analyst')");
            migrationBuilder.Sql("DELETE FROM Offices WHERE OfficeName IN ('Seatle', 'India')");
            migrationBuilder.Sql("DELETE FROM Employees");
        }
    }
}
