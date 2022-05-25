using Microsoft.VisualStudio.TestTools.UnitTesting;
using Tlie.Business.Services;

namespace Tlie.Tests.Business
{
    [TestClass]
    public class WeatherServiceTests
    {
        [TestMethod]
        public void GetWeather()
        {
            var service = new WeatherService();
            var weather = service.GetWeather();
            Assert.IsNotNull(weather);
        }
    }
}