using Microsoft.EntityFrameworkCore;
using RecipeApp.Models;

namespace RecipeApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { }

        public ApplicationDbContext()
        { }

        public DbSet<Recipes> Recipes { get; set; }
        public DbSet<Recipe_Steps> Recipe_Steps { get; set; }
        public DbSet<Ingredients> Ingredients { get; set; }
        //public DbSet<Rec_Ing_Steps> Rec_Ing_Steps { get; set; }
    }
}