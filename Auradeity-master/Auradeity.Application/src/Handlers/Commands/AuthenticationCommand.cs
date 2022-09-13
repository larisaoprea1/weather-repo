using System.Security.Cryptography;
using System.Text;
using Auradeity.Application.Contracts;
using Auradeity.Application.Interfaces;
using Auradeity.Domain.Entities;
using Auradeity.Domain.Models.Request;
using Microsoft.EntityFrameworkCore;

namespace Auradeity.Application.Handlers {

    public class AuthenticationCommand : IAuthenticationCommand {
        private readonly IApplicationDbContext _applicationDbContext;
        private readonly IJwtQueryService _jwtQueryService;

        public AuthenticationCommand(IApplicationDbContext applicationDbContext, IJwtQueryService jwtQueryService) {
            _applicationDbContext = applicationDbContext;
            _jwtQueryService = jwtQueryService;
        }

        public async Task<string> Register(RequestRegisterModel requestRegisterModel) {
            try {
                var accountAlreadyExists = await _applicationDbContext.Accounts
                    .AsNoTracking()
                    .AnyAsync(entity =>
                        entity.Username == requestRegisterModel.Username.Trim().ToLower() ||
                        entity.Email == requestRegisterModel.Email.Trim().ToLower()
                    );

                if (accountAlreadyExists == true) {
                    return "Username or email already exists!";
                }

                ComputeHashPassword(requestRegisterModel.Password, out byte[] keyPassword, out byte[] hashPassword);

                var accountEntity = new AccountEntity() {
                    Username = requestRegisterModel.Username.Trim().ToLower(),
                    Email = requestRegisterModel.Email.Trim().ToLower(),
                    HashPassword = hashPassword,
                    KeyPassword = keyPassword
                };

                _applicationDbContext.Accounts.Add(accountEntity);
                var isSavedSuccessfully = await _applicationDbContext.SaveChangesAsync() > 0;

                return isSavedSuccessfully ? _jwtQueryService.GetJwtToken(accountEntity.Username, accountEntity.Id) : string.Empty;
            }
            catch (Exception) {
                throw;
            }
        }

        private void ComputeHashPassword(string password, out byte[] keyPassword, out byte[] hashPassword) {
            using var hmac = new System.Security.Cryptography.HMACSHA512();

            keyPassword = hmac.Key;
            hashPassword = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
        }
    }

}