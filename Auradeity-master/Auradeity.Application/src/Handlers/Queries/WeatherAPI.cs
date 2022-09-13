using Auradeity.Application.Contracts;
using Auradeity.Application.Interfaces;
using Auradeity.Domain.Entities;
using Auradeity.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace Auradeity.Application.Handlers {

    public class WeatherAPI : IWeatherAPI {
        private const string OpenWeatherApiUrl = "http://api.openweathermap.org/data/2.5/find";
        private const string OpenWeatherApiKey = "a3436f5ff8cf99795339640c85d3b6d3";

        private readonly IApplicationDbContext _applicationDbContext;

        public WeatherAPI(IApplicationDbContext applicationDbContext) {
            _applicationDbContext = applicationDbContext;
        }

        public async Task<WeatherResponse> GetWeatherByCity(int id, string city) {
            var httpClient = new HttpClient();
            var url = GetOpenWeatherUrl(city);

            using (HttpResponseMessage httpResponse = await httpClient.GetAsync(url)) {
                if (httpResponse.IsSuccessStatusCode) {
                    var json = await httpResponse.Content.ReadAsStringAsync();
                    var weather = JsonConvert.DeserializeObject<WeatherResponse>(json);

                    var entity = await _applicationDbContext.WeatherDatas
                        .AsNoTracking()
                        .FirstOrDefaultAsync(wd => wd.AccountId == id);

                    if (weather.List.Count > 0) {
                        if (entity == null) {
                            _applicationDbContext.WeatherDatas.Add(new WeatherDataEntity() {
                                AccountId = id,
                                Data = json
                            });
                        }
                        else {
                            entity.Data = json;
                            _applicationDbContext.WeatherDatas.Update(entity);
                        }

                        await _applicationDbContext.SaveChangesAsync();
                        return weather;
                    }

                }
            }

            return null;
        }

        public async Task<WeatherResponse> GetLastByUserId(int id) {
            var entity = await _applicationDbContext.WeatherDatas.AsNoTracking().FirstOrDefaultAsync(wd => wd.AccountId == id);

            if (entity == null) {
                return null;
            }

            return JsonConvert.DeserializeObject<WeatherResponse>(entity.Data);
        }

        private string GetOpenWeatherUrl(string city, string units = "metric") {
            return $"{OpenWeatherApiUrl}?q={city}&units={units}&appid={OpenWeatherApiKey}";
        }
    }

}
