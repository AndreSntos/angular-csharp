using Microsoft.EntityFrameworkCore;

namespace RegisterApi.Models
{
    public class RegisterDbContext : DbContext 
    {
        public RegisterDbContext(DbContextOptions<RegisterDbContext> options): base(options)
        {

        }

        public DbSet<Users> Users { get; set; }
    }
}
