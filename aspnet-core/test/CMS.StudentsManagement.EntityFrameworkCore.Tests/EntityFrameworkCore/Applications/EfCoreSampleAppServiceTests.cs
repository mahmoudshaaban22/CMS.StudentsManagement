using CMS.StudentsManagement.Samples;
using Xunit;

namespace CMS.StudentsManagement.EntityFrameworkCore.Applications;

[Collection(StudentsManagementTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<StudentsManagementEntityFrameworkCoreTestModule>
{

}
