using Volo.Abp.Modularity;

namespace CMS.StudentsManagement;

[DependsOn(
    typeof(StudentsManagementApplicationModule),
    typeof(StudentsManagementDomainTestModule)
)]
public class StudentsManagementApplicationTestModule : AbpModule
{

}
