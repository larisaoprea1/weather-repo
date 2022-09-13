namespace Auradeity.Domain.Models {

    public class WeatherResponse {
        public string Message { get; set; }
        public int Cod { get; set; }
        public int Count { get; set; }
        public List<WeatherList> List { get; set; }
    }

}
