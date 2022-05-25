using Microsoft.Extensions.DependencyInjection;
using Tlie.Core.Interfaces;
using Tlie.Integration.Services;

namespace Tlie.Business
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddIntegrationServices(this IServiceCollection services)
        {
            services.AddTransient(typeof(IDataStore), typeof(DataStore));

            return services;
        }
    }
}
