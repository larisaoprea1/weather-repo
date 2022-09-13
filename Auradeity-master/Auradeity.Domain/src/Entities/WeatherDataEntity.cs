using System.ComponentModel.DataAnnotations.Schema;

namespace Auradeity.Domain.Entities {

    [Table("weather")]
    public class WeatherDataEntity : TrackableEntity {
        [Column("data")]
        public string Data { get; set; }
        
        [Column("account_id")]
        public int AccountId { get; set; }
    
        public AccountEntity Account { get; set; }
    }

}
