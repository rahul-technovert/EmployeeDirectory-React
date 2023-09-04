using EmployeeDIrectory.Concerns;
using EmployeeDIrectory.Contracts;
using Microsoft.EntityFrameworkCore;
using EmployeeDIrectory.Services.Contexts;

namespace EmployeeDIrectory.Services
{
    public class EmployeeServices : IEmployeeService
    {
        private EmployeeDirectoryContext _context;
        public EmployeeServices(EmployeeDirectoryContext context)
        {
            this._context = context;
        }

        public ICollection<EmployeeCard>GetAll()
        {
            return _context.EmployeeCards.Include(e => e.Department).Include(e => e.JobTitle).Include(e => e.Office).ToList();
        }

        public ICollection<Count> GetCounts()
        {
            return _context.Counts.ToList();
        }

        public Employee GetEmployee(int id)
        {

            return _context.Employees.Include(e => e.Department)
                                      .Include(e => e.Office)
                                      .Include(e => e.JobTitle)
                                      .FirstOrDefault(e => e.Id == id);
                                   
        }

        public Employee CreateEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            _context.SaveChanges();

            return GetEmployee(employee.Id);
        }

        public Employee UpdateEmployee(int id, Employee employee)
        {
            Employee dbEmployee = GetEmployee(id);

            if (dbEmployee == null)
                return null;

            _context.Update(employee);
            _context.SaveChanges();
            return GetEmployee(id);

        }

        public bool RemoveEmployee(int id)
        {
            Employee fetchedEmployee = GetEmployee(id);

            if(fetchedEmployee == null)
                return false;

            _context.Employees.Remove(fetchedEmployee);
            _context.SaveChanges();
            return true;
        }
    }
}
