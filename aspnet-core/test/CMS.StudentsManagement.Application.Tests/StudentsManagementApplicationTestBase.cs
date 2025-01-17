using Volo.Abp.Modularity;

namespace CMS.StudentsManagement;

public abstract class StudentsManagementApplicationTestBase<TStartupModule> : StudentsManagementTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
