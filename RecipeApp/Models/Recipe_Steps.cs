using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecipeApp.Models
{
    public class Recipe_Steps
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Step_no { get; set; }
        public int RecipeId { get; set; }

        public string Instructions { get; set; }
        public Recipes Recipes { get; set; }
    }
}