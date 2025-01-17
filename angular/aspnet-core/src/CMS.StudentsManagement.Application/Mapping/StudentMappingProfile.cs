using AutoMapper;
using CMS.StudentsManagement.Students;

namespace CMS.StudentsManagement.Mapping
{
    public class StudentMappingProfile : Profile
    {
        public StudentMappingProfile()
        {
            CreateMap<Student, StudentDto>();
            CreateMap<CreateUpdateStudentDto, Student>();
        }


    }
}
