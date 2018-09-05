using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeApp.Models
{
    public class RecipeModel
    {
        public int RecipeId { get; set; }

        public string RecipeName { get; set; }
        public int IngredientId { get; set; }
        public string IngredientName { get; set; }
        public int Step_no { get; set; }
        public string Instructions { get; set; }
    }
}
