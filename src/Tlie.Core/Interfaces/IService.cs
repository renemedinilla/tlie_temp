using Tlie.Core.Models;

namespace Tlie.Core.Interfaces
{
    public interface IService
    {
        public IEnumerable<WeatherForecast> GetWeather();
    }
}
