using Auradeity.Application.Contracts;
using Auradeity.Application.Interfaces;
using Auradeity.Domain.Models.Request;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace Auradeity.Application.Handlers {

    public class AuthenticationQuery : IAuthenticationQuery {
        private readonly IApplicationDbContext _applicationDbContext;
        private readonly IJwtQueryService _jwtQueryService;

        public AuthenticationQuery(IApplicationDbContext applicationDbContext, IJwtQueryService jwtQueryService) {
            _applicationDbContext = applicationDbContext;
            _jwtQueryService = jwtQueryService;
        }

        public async Task<string> LoginIfUserExists(RequestLoginModel requestLoginModel) {
            try {
                var accountEntity = await _applicationDbContext.Accounts
                    .AsNoTracking()
                    .FirstOrDefaultAsync(entity => entity.Username == requestLoginModel.Username.Trim().ToLower());

                if (accountEntity != null && IsPasswordCorrect(requestLoginModel.Password, accountEntity.KeyPassword, accountEntity.HashPassword)) {
                    return _jwtQueryService.GetJwtToken(accountEntity.Username, accountEntity.Id);
                }

                return string.Empty;
            }
            catch (Exception) {
                throw;
            }
        }

        private bool IsPasswordCorrect(string password, byte[] keyPassword, byte[] hashedPassword) {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(keyPassword)) {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

                for (int i = 0; i < computedHash.Length; i++) {
                    if (computedHash[i] != hashedPassword[i]) {
                        return false;
                    }
                }

                return true;
            }
        }
    }

}