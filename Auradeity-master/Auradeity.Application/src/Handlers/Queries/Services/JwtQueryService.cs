using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Auradeity.Application.Contracts;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Auradeity.Application.Handlers {

    public class JwtQueryService : IJwtQueryService {
        private readonly IConfiguration _configuration;

        public JwtQueryService(IConfiguration configuration) {
            _configuration = configuration;
        }

        public string GetJwtToken(string username, long id) {
            try {
                Claim[] claims = new[] {
                    new Claim(ClaimTypes.NameIdentifier, id.ToString()),
                    new Claim(ClaimTypes.Name, username),
                };

                var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));
                var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);

                var securityTokenDescriptor = new SecurityTokenDescriptor {
                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.Now.AddDays(1),
                    SigningCredentials = signingCredentials,
                };

                var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
                var securityToken = jwtSecurityTokenHandler.CreateToken(securityTokenDescriptor);

                return jwtSecurityTokenHandler.WriteToken(securityToken);
            }
            catch (Exception) {
                throw;
            }
        }
    }

}