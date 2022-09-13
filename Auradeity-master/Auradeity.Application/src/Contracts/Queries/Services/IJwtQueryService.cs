namespace Auradeity.Application.Contracts {

    public interface IJwtQueryService {
        string GetJwtToken(string username, long id);
    }

}