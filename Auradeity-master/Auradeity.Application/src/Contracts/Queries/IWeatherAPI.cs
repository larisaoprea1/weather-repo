using Auradeity.Domain.Models;

namespace Auradeity.Application.Contracts {

    public interface IWeatherAPI {
        Task<WeatherResponse> GetWeatherByCity(int id, string city);

        Task<WeatherResponse> GetLastByUserId(int id);
    }

}
