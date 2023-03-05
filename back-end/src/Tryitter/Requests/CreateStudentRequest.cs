using System.ComponentModel.DataAnnotations;

public class CreateStudentRequest 
{
    [Required]
    [MaxLength(50)]
    public string StudentName { get; set; }
    [RegularExpression("^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$",
        ErrorMessage = "O email deve ter o formato correto")]
    public string Email { get; set; }
    public Modules CurrentModule { get; set; }
    public string Status { get; set; }
    [Required]
    [RegularExpression("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$",
        ErrorMessage = "A Senha deve ser mais forte")]
    public string Password { get; set; }

}