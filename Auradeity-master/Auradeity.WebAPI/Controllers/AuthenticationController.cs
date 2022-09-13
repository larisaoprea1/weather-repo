using Auradeity.Application.Contracts;
using Auradeity.Application.Interfaces;
using Auradeity.Domain.Models;
using Auradeity.Domain.Models.Request;
using Microsoft.AspNetCore.Mvc;
using MimeKit;

namespace Auradeity.WebAPI.Controllers {

    public class AuthenticationController : ApiController {
        private readonly IAuthenticationCommand _authenticationCommand;
        private readonly IAuthenticationQuery _authenticationQuery;

        public AuthenticationController(IAuthenticationCommand authenticationCommand, IAuthenticationQuery authenticationQuery) {
            _authenticationCommand = authenticationCommand;
            _authenticationQuery = authenticationQuery;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RequestRegisterModel requestRegisterModel) {
            var result = await _authenticationCommand.Register(requestRegisterModel);

            if (string.IsNullOrEmpty(result)) {
                return BadRequest();
            }

            return Ok(result);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] RequestLoginModel requestLoginModel) {
            var token = await _authenticationQuery.LoginIfUserExists(requestLoginModel);

            if (string.IsNullOrEmpty(token)) {
                return NotFound();
            }

            return Ok(token);
        }
    }

}