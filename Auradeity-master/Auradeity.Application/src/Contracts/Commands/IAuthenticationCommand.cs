using Auradeity.Domain.Models.Request;

namespace Auradeity.Application.Contracts {

    public interface IAuthenticationCommand {
        Task<string> Register(RequestRegisterModel requestRegisterModel);
    }

}