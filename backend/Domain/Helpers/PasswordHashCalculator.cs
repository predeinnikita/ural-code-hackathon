using System.Security.Cryptography;
using System.Text;

namespace Domain.Helpers;

public static class PasswordHashCalculator
{
    public static string Calculate(string password)
    {
        using var md5 = MD5.Create();
        using var memoryStream = new MemoryStream(Encoding.UTF8.GetBytes(password));
        var hash = md5.ComputeHash(memoryStream);
        return Convert.ToBase64String(hash);
    }
}