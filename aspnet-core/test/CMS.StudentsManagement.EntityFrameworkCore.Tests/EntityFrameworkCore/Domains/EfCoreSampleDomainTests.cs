using CMS.StudentsManagement.Samples;
using Xunit;

namespace CMS.StudentsManagement.EntityFrameworkCore.Domains;

[Collection(StudentsManagementTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<StudentsManagementEntityFrameworkCoreTestModule>
{

}
