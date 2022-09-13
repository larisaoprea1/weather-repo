using Auradeity.Domain.Models.Request;

namespace Auradeity.Application.Contracts {

    public interface IAuthenticationQuery {
        Task<string> LoginIfUserExists(RequestLoginModel requestLoginModel);
    }

}