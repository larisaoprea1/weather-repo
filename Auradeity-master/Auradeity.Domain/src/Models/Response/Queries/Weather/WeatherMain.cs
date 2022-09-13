using Newtonsoft.Json;

namespace Auradeity.Domain.Models {

    public class WeatherMain {
        public double Temp { get; set; }

        [JsonProperty("feels_like")]
        public double FeelsLike { get; set; }

        [JsonProperty("temp_min")]
        public double TeampMin { get; set; }

        [JsonProperty("temp_max")]
        public double TeampMax { get; set; }

        public int Pressure { get; set; }
        public int Humidity { get; set; }
    }

}
