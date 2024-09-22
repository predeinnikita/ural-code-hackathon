namespace WebApi.Extensions;

public static class UserTypeExtensions
{
    public static string ToReadable(this UserType userType)
        => userType switch
        {
            UserType.Student => "Student",
            UserType.BusinessOrganization => "BusinessOrganization",
            UserType.Administrator => "Administrator",
            _ => "None"
        };
}