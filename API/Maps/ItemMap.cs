using API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace API.Maps
{
    public class ItemMap
    {
        public ItemMap(EntityTypeBuilder<Item> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(x => x.Id);
            entityTypeBuilder.ToTable("item");

            entityTypeBuilder.Property(x => x.Id).HasColumnName("id");
            entityTypeBuilder.Property(x => x.Name).HasColumnName("name");
            entityTypeBuilder.Property(x => x.Description).HasColumnName("description");
            entityTypeBuilder.Property(x => x.Price).HasColumnName("price");
        }
    }
}
