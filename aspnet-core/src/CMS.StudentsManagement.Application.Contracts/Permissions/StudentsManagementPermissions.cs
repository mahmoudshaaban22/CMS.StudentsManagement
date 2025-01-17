namespace CMS.StudentsManagement.Permissions;

public static class StudentsManagementPermissions
{
    public const string GroupName = "StudentsManagement";

    //Add your own permission names. Example:
    public const string StudentsGroupName = GroupName + ".Students";
    public const string CreateEditStudentPermission = StudentsGroupName + ".CreateEdit";
    public const string DeleteStudentPermission = StudentsGroupName + ".DeleteStudent";
    public const string ListStudentPermission = StudentsGroupName + ".ListStudent";
    public const string GetStudentPermission = StudentsGroupName + ".GetStudent";
    public const string GetStudentsStatisticsPermission = StudentsGroupName + ".StudentsStatistics";

}
