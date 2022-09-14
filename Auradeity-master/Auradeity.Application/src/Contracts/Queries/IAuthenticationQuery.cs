using Auradeity.Domain.Models.Request;
using Auradeity.Domain.src.Models.Response.Queries.Authentication;

namespace Auradeity.Application.Contracts {

    public interface IAuthenticationQuery {
        Task<ResponseLoginModel> LoginIfUserExists(RequestLoginModel requestLoginModel);
    }

}