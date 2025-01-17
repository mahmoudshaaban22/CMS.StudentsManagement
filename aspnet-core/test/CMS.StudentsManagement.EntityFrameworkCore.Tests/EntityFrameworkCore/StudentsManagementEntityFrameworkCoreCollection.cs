using Xunit;

namespace CMS.StudentsManagement.EntityFrameworkCore;

[CollectionDefinition(StudentsManagementTestConsts.CollectionDefinitionName)]
public class StudentsManagementEntityFrameworkCoreCollection : ICollectionFixture<StudentsManagementEntityFrameworkCoreFixture>
{

}
