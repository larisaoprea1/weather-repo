using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Auradeity.Domain.src.Models.Response.Queries.Authentication
{
    public class ResponseLoginModel
    {
        public string Token { get; set; }
        public bool? IsAdmin { get; set; }
    }
}
