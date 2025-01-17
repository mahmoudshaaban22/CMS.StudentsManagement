using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace CMS.StudentsManagement.Students
{
    public interface IStudentAppService
    {
        Task<StudentDto> GetStudentAsync(int id);
        Task<StudentDto> CreateStudentAsync(CreateUpdateStudentDto dto);
        Task<StudentDto> UpdateStudentAsync(CreateUpdateStudentDto dto);
        Task<bool> DeleteStudentAsync(int id);
        Task<PagedResultDto<StudentDto>> GetStudentListAsync(GetStudentListDto dto);
    }
}
