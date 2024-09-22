using Aoaoao.Infra.ModelMapping;
using DAL.Entities;
using DAL.Repositories;
using Domain.Helpers;
using Domain.Models.AuthInfo;
using Domain.Models.Student;

namespace Domain.Services;

public interface IStudentService
{
    Task<StudentModel?> FindByLoginAndPassword(AuthInfo authInfo, CancellationToken cancellationToken = default);
    Task<StudentModel?> Create(StudentModel studentModel, CancellationToken cancellationToken = default);
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

    public async Task<StudentModel?> Create(StudentModel studentModel, CancellationToken cancellationToken = default)
    {
        var student = studentModel.Map<Student>();
        student.Id = Guid.NewGuid();
        student.EducationalOrganizationId = null;
        await studentRepository.Create(student, cancellationToken);
        return student.Map<StudentModel>();
    }
}