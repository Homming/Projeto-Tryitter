

public class LoginService {

    private readonly ITryitterRepository<Student> _repository;

    public LoginService(ITryitterRepository<Student> repository) {
        _repository = repository;
    }

    public async Task<string> LoginStudent(LoginRequest login){

        var student = await _repository.GetByNameOrEmail(login.Email)!;

        if (student == null)
            throw new StudentNotFound("Estudante não encontrado ao efetuar login");
    }
}