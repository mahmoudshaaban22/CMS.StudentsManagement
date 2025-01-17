using CMS.StudentsManagement.Enums;
using System;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Application.Dtos;

namespace CMS.StudentsManagement.Students
{
    public class CreateUpdateStudentDto : EntityDto<int>
    {

        [Required(ErrorMessage = "Name is required.")]
        public string Name { get; set; } = string.Empty;

        [Range(5, 18, ErrorMessage = "Age must be between 5 and 18.")]
        public int Age { get; set; }
        public Grade Grade { get; set; }
    }
}
