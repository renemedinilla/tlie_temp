using Microsoft.Extensions.DependencyInjection;
using Tlie.Business.Services;
using Tlie.Core.Interfaces;

namespace Tlie.Business
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddTransient(typeof(IService), typeof(WeatherService));

            return services;
        }
    }
}
