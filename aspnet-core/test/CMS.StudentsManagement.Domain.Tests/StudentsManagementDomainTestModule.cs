using Volo.Abp.Modularity;

namespace CMS.StudentsManagement;

[DependsOn(
    typeof(StudentsManagementDomainModule),
    typeof(StudentsManagementTestBaseModule)
)]
public class StudentsManagementDomainTestModule : AbpModule
{

}
