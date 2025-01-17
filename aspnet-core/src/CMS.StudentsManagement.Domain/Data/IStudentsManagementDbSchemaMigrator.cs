using System.Threading.Tasks;

namespace CMS.StudentsManagement.Data;

public interface IStudentsManagementDbSchemaMigrator
{
    Task MigrateAsync();
}
