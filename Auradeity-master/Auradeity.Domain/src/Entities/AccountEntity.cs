using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Auradeity.Domain.Entities {

    [Table("accounts")]
    public class AccountEntity : TrackableEntity {
        [MaxLength(64)]
        [Column("username")]
        public string Username { get; set; }

        [MaxLength(128)]
        [Column("email")]
        public string Email { get; set; }

        [Column("key_password")]
        public byte[] KeyPassword { get; set; }

        [Column("hash_password")]
        public byte[] HashPassword { get; set; }
    }

}