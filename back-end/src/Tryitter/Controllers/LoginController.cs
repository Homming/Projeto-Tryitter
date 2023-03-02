using Microsoft.AspNetCore.Mvc;

namespace Tryitter.Controllers;

[ApiController]
[Route("[controller]")]
public class LoginController : ControllerBase
{
    [HttpPost]
    public async Task<ActionResult<string>> Login([FromBody] LoginRequest student)
    {
        
    }
}
