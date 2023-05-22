using API.Maps;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreDb : DbContext
    {
        //Contruct
        public StoreDb(DbContextOptions<StoreDb> options) : base(options)
        {

        }
        public DbSet<Item> Items => Set<Item>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            new ItemMap(modelBuilder.Entity<Item>());
        }
    }
}
