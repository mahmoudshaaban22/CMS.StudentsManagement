using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;

namespace CMS.StudentsManagement.DomainExceptions
{
    public class NotFoundException : BusinessException
    {
        public NotFoundException(int id): base(StudentsManagementDomainErrorCodes.NOT_FOUND)
        {
            WithData("id" , id);
        }
    }
}
