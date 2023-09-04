using AutoMapper;
using EmployeeDIrectory.Concerns;
using EmployeeDIrectory.Controllers.Resources;

namespace EmployeeDIrectory.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //Domain to API Resource
            CreateMap<Employee, EmployeeResource>();

            //API Resouce to Domain
            CreateMap<SaveEmployeeResource, Employee>()
                .ForMember(e => e.Id, opt => opt.Ignore());
                            
        }
    }
}
