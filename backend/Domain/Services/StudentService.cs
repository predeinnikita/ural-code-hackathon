using Aoaoao.Infra.ModelMapping;
using DAL.Repositories;
using Domain.Helpers;
using Domain.Models.AuthInfo;
using Domain.Models.Student;

namespace Domain.Services;

public interface IStudentService
{
    Task<StudentModel?> FindByLoginAndPassword(AuthInfo authInfo, CancellationToken cancellationToken = default);
}

public class StudentService : IStudentService
{
    private readonly IStudentRepository studentRepository;

    public StudentService(IStudentRepository studentRepository)
    {
        this.studentRepository = studentRepository;
    }

    public async Task<StudentModel?> FindByLoginAndPassword(AuthInfo authInfo, CancellationToken cancellationToken = default)
    {
        var student = await studentRepository.FindByLoginAndPassword(authInfo.Login, PasswordHashCalculator.Calculate(authInfo.Password), cancellationToken);
        return student?.Map<StudentModel>();
    }
}