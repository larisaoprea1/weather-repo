namespace Auradeity.Domain.Models {

    public class WeatherList {
        public int Id { get; set; }
        public string Name { get; set; }
        public WeatherCoord Coord { get; set; }
        public WeatherMain Main { get; set; }
        public int Dt { get; set; }
        public WeatherWind Wind { get; set; }
        public WeatherSys Sys { get; set; }

        // TODO: Nu sunt bool. Sunt obiecte si ele.
        // public bool? Rain { get; set; }
        // public bool? Snow { get; set; }

        public WeatherClouds Clouds { get; set; }
        public List<WeatherInfo> Weather { get; set; }
    }

}
