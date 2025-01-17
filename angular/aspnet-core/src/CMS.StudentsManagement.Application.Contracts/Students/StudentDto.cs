using CMS.StudentsManagement.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace CMS.StudentsManagement.Students
{
    public class StudentDto : FullAuditedEntityDto<int>
    {
        [Required(ErrorMessage = "Name is required.")]
        public string Name { get; set; } = string.Empty;

        [Range(5, 18, ErrorMessage = "Age must be between 5 and 18.")]
        public int Age { get; set; }
        public Grade Grade { get; set; }
    }
}
