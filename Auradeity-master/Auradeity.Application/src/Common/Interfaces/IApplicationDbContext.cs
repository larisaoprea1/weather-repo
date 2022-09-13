using Auradeity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Auradeity.Application.Interfaces {

    public interface IApplicationDbContext {
        DbSet<AccountEntity> Accounts { get; set; }
        DbSet<WeatherDataEntity> WeatherDatas { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken());
    }

}