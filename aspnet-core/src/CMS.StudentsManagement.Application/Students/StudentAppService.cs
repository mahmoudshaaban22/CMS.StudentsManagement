using CMS.StudentsManagement.DomainExceptions;
using CMS.StudentsManagement.Enums;
using CMS.StudentsManagement.Localization;
using CMS.StudentsManagement.Permissions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Localization;
using Volo.Abp.ObjectMapping;

namespace CMS.StudentsManagement.Students
{
    [Authorize]
    public class StudentAppService : ApplicationService, IStudentAppService
    {
        #region fields
        private readonly IRepository<Student, int> studentRepository;
        #endregion

        #region ctor

        public StudentAppService(IRepository<Student , int> studentRepository)
        {
            this.studentRepository = studentRepository;
            LocalizationResource = typeof(StudentsManagementResource);

        }
        #endregion

        #region StudentAppService

        [Authorize(StudentsManagementPermissions.CreateEditStudentPermission)]
        public async Task<StudentDto> CreateStudentAsync(CreateUpdateStudentDto dto)
        {
            var student = ObjectMapper.Map<CreateUpdateStudentDto, Student>(dto);
            var insrted = await studentRepository.InsertAsync(student ,autoSave:true);
            return ObjectMapper.Map<Student, StudentDto>(insrted);
        }
        [Authorize(StudentsManagementPermissions.DeleteStudentPermission)]

        public async Task<bool> DeleteStudentAsync(int id)
        {
            var existingStudent = await studentRepository.GetAsync(id);
            if (existingStudent == null)
                return false;

            await studentRepository.DeleteAsync(existingStudent);
            return true;
        }
        [Authorize(StudentsManagementPermissions.GetStudentPermission)]

        public async Task<StudentDto> GetStudentAsync(int id)
        {
            var student =await studentRepository.WithDetailsAsync().Result
                        .AsQueryable().FirstOrDefaultAsync(a=>a.Id == id);
            if (student == null)
                throw new NotFoundException(id);
            return ObjectMapper.Map<Student, StudentDto>(student);

        }
        [Authorize(StudentsManagementPermissions.ListStudentPermission)]

        public async Task<PagedResultDto<StudentDto>> GetStudentListAsync(GetStudentListDto dto)
        {
            if(dto.Sorting.IsNullOrWhiteSpace())
                dto.Sorting = nameof(Student.Id);

            var query = studentRepository.WithDetailsAsync().Result
                .AsQueryable();

            var count = await query.CountAsync();

            var students =await query
           .Skip(dto.SkipCount)
           .Take(dto.MaxResultCount)
           .OrderBy(dto.Sorting)
           .ToListAsync();
            return new PagedResultDto<StudentDto>(count, ObjectMapper.Map<List<Student>, List<StudentDto>>(students));
       
        }
        [Authorize(StudentsManagementPermissions.CreateEditStudentPermission)]

        public async Task<StudentDto> UpdateStudentAsync(CreateUpdateStudentDto dto)
        { 
            var student = await studentRepository.WithDetailsAsync().Result
                            .AsQueryable().FirstOrDefaultAsync(a => a.Id == dto.Id);

            if (student == null)
                throw new NotFoundException(dto.Id);

            var mapped = ObjectMapper.Map<CreateUpdateStudentDto, Student>(dto , student);
            var updated = await studentRepository.UpdateAsync(mapped , autoSave:true);
            return ObjectMapper.Map<Student, StudentDto>(updated);

        }
        [Authorize(StudentsManagementPermissions.GetStudentsStatisticsPermission)]

        public async Task<StatisticsDto> GetStatisticsAsync()
        {
            var totalStudents = await studentRepository.CountAsync();
            var averageAge = await studentRepository
                .AverageAsync(student => student.Age);

            var gradeDistribution = studentRepository.GetListAsync().Result
                .GroupBy(student => L[((Grade)student.Grade).ToString()].Value)
                .ToDictionary(g => g.Key, g => g.Count());

            return new StatisticsDto
            {
                TotalStudents = totalStudents,
                AverageAge = averageAge,
                GradeDistribution = gradeDistribution
            };
        }
        #endregion

    }
}
