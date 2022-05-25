using Microsoft.AspNetCore.Mvc;
using Tlie.Core.Interfaces;
using Tlie.Core.Models;

namespace Tlie.App.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly IService _service;
    
    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger, IService service)
    {
        _logger = logger;
        _service = service;
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        return _service.GetWeather();
    }
}
