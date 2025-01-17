using CMS.StudentsManagement.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace CMS.StudentsManagement.Students
{
    public class Student : FullAuditedEntity<int>
    {
        public required string Name { get; set; }
        public required int Age { get; set; }
        public required Grade Grade { get; set; }
    }
}
