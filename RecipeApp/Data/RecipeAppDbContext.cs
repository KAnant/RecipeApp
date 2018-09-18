using Microsoft.EntityFrameworkCore;
using RecipeApp.Models;
using System.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeApp.Data
{
    public class RecipeAppDbContext : DbContext
    {
        public RecipeAppDbContext(DbContextOptions<RecipeAppDbContext> options) : base(options)
        { }

        public RecipeAppDbContext()
        { }

        public DbSet<Recipes> Recipes {get; set;}
    }
}
