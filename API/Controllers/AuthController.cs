using System.Threading.Tasks;
using Domain.Interfaces;
using DTO.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync(UserLoginDto model)
        {
            var result = await _authService.LoginAsync(model);
            return Ok(result);
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync(UserRegisterDto model)
        {
            await _authService.RegisterAsync(model);
            return Ok();
        }
    }
}