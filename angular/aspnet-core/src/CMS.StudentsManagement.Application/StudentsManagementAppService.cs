using System;
using System.Collections.Generic;
using System.Text;
using CMS.StudentsManagement.Localization;
using Volo.Abp.Application.Services;

namespace CMS.StudentsManagement;

/* Inherit your application services from this class.
 */
public abstract class StudentsManagementAppService : ApplicationService
{
    protected StudentsManagementAppService()
    {
        LocalizationResource = typeof(StudentsManagementResource);
    }
}
