using Volo.Abp.Settings;

namespace CMS.StudentsManagement.Settings;

public class StudentsManagementSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(StudentsManagementSettings.MySetting1));
    }
}
