namespace Auradeity.Domain.Models.Request {

    public class RequestRegisterModel {
        public string Username { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string Email { get; set; }
    }

}