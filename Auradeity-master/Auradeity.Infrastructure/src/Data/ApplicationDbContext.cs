using Auradeity.Application.Interfaces;
using Auradeity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Auradeity.Infrastructure.Data {

    public class ApplicationDbContext : DbContext, IApplicationDbContext {
        public DbSet<AccountEntity> Accounts { get; set; }
        public DbSet<WeatherDataEntity> WeatherDatas { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken()) {
            var addedEntities = ChangeTracker.Entries()
                .Where(e => e.Entity is TrackableEntity && (e.State == EntityState.Added));

            foreach (var entity in addedEntities) {
                ((TrackableEntity)entity.Entity).CreatedDate = DateTime.UtcNow;
            }

            var modifiedEntities = ChangeTracker.Entries()
                .Where(e => e.Entity is TrackableEntity && (e.State == EntityState.Modified));

            foreach (var entity in modifiedEntities) {
                ((TrackableEntity)entity.Entity).UpdatedDate = DateTime.UtcNow;
            }

            return base.SaveChangesAsync(cancellationToken);
        }
    }

}