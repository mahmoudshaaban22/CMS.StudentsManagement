using CMS.StudentsManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace CMS.StudentsManagement.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class StudentsManagementController : AbpControllerBase
{
    protected StudentsManagementController()
    {
        LocalizationResource = typeof(StudentsManagementResource);
    }
}
