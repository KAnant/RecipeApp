using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeApp.Models
{
    public class RecipesDTO
    {
        public string RecipeName { get; set; }
        public List<Ingredients> Ingredients { get; set; }
        public List<Recipe_Steps> Recipe_Steps { get; set; }
    }
}
