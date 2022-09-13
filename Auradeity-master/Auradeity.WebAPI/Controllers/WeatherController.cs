using Auradeity.Application.Contracts;
using Auradeity.Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Security.Claims;

namespace Auradeity.WebAPI.Controllers {

    [Authorize]
    public class WeatherController : ApiController {
        private readonly IWeatherAPI _weatherApi;

        public WeatherController(IWeatherAPI weatherApi) {
            _weatherApi = weatherApi;
        }

        [HttpGet("{city}")]
        public async Task<WeatherResponse> GetWeather(string city) {
            string strUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            int userId = Convert.ToInt32(strUserId);

            var weather = await _weatherApi.GetWeatherByCity(userId, city);

            return weather;
        }
        
        [HttpGet]
        public async Task<WeatherResponse> GetLastWeather() {
            string strUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            int userId = Convert.ToInt32(strUserId);

            var weather = await _weatherApi.GetLastByUserId(userId);

            return weather;
        }
    }

}
