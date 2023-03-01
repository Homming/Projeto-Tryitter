

public class LoginService {

    private readonly ITryitterRepository<Student> _repository;

    public LoginService(ITryitterRepository<Student> repository) {
        _repository = repository;
    }
}