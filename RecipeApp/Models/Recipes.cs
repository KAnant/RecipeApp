using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecipeApp.Models
{
    public class Recipes
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RecipeId { get; set; }

        public string RecipeName { get; set; }

        public ICollection<Ingredients> Ingredients { get; set; }
        public ICollection<Recipe_Steps> Recipe_Steps { get; set; }
    }
}