using CMS.StudentsManagement.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace CMS.StudentsManagement.Permissions;

public class StudentsManagementPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(StudentsManagementPermissions.GroupName);
        //Define your own permissions here. Example:
        var StudentGroup = context.AddGroup(StudentsManagementPermissions.StudentsGroupName , L("Students"));
        StudentGroup.AddPermission(StudentsManagementPermissions.CreateEditStudentPermission, L("Permission:Students:CreateEditStudent"));
        StudentGroup.AddPermission(StudentsManagementPermissions.DeleteStudentPermission, L("Permission:Students:DeleteStudent"));
        StudentGroup.AddPermission(StudentsManagementPermissions.ListStudentPermission, L("Permission:Students:ListStudent"));
        StudentGroup.AddPermission(StudentsManagementPermissions.GetStudentPermission, L("Permission:Students:GetStudent"));
        StudentGroup.AddPermission(StudentsManagementPermissions.GetStudentsStatisticsPermission, L("Permission:Students:GetStudentsStatistics"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<StudentsManagementResource>(name);
    }
}
