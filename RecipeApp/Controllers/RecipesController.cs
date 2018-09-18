using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipeApp.Data;
using RecipeApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeApp.Controllers
{
    [EnableCors("RecipesCorsPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly RecipeAppDbContext _context;

        public RecipesController(RecipeAppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        //[Route("getRecipes")]
        public ActionResult<List<Recipes>> GetRecipes()
        {
            return _context.Recipes.ToList();
        }

        [HttpGet("GetRecipesById/{id}")]
        //[Route("getRecipesById/{id}")]
        public async Task<IActionResult> GetRecipesById([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var recipes = await _context.Recipes.SingleOrDefaultAsync(m => m.RecipeId == id);

            if (recipes == null)
            {
                return NotFound();
            }

            return Ok(recipes);
        }
        [HttpPost]
        //[Route("createRecipes")]
        public async Task<IActionResult> CreateRecipes([FromBody] Recipes recipes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Recipes.Add(recipes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecipes", new { id = recipes.RecipeId }, recipes);
        }

        [HttpPut]
        [Route("updateRecipes")]
        public IActionResult UpdateRecipes([FromBody] Recipes recipe)
        {
            _context.Recipes.Update(recipe);
            _context.SaveChanges();
            return Ok(recipe);
        }

       
        [HttpDelete("{id}")]
        //[Route("deleteRecipes/{id}")]
        public async Task<IActionResult> DeleteRecipes([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var recipes = await _context.Recipes.SingleOrDefaultAsync(m => m.RecipeId == id);
            if (recipes == null)
            {
                return NotFound();
            }

            _context.Recipes.Remove(recipes);
            await _context.SaveChangesAsync();

            return Ok(recipes);
        }

        private bool RecipesExists(string id)
        {
            return _context.Recipes.Any(e => e.RecipeId == id);
        }

        //[HttpPut("{id}")]
        ////[Route("updateRecipes/{id}")]

        //public IActionResult UpdateRecipes(int id, [FromBody] Recipes recipes)
        //{
        //    var recipe = _context.Recipes.Find(id);
        //    if (recipe == null)
        //    {
        //        return NotFound();
        //    }
        //    recipe.RecipeId = recipes.RecipeId;
        //    recipe.RecipeName = recipes.RecipeName;
        //    recipe.Ingredients = recipes.Ingredients;
        //    recipe.Steps = recipes.Steps;
        //    _context.Recipes.Update(recipe);
        //    _context.SaveChanges();
        //    return NoContent();
        //}

        ////public async Task<IActionResult> UpdateRecipes([FromRoute] int id, [FromBody] Recipes recipes)
        ////{
        ////    if (!ModelState.IsValid)
        ////    {
        ////        return BadRequest(ModelState);
        ////    }

        ////    if (id != recipes.RecipeId)
        ////    {
        ////        return BadRequest();
        ////    }
        ////    //var recipe = new Recipes
        ////    //{
        ////    //    RecipeId = recipes.RecipeId,
        ////    //    RecipeName = recipes.RecipeName

        ////    //};

        ////    //_context.Update(recipe);
        ////    _context.Entry(recipes).State = EntityState.Modified;

        ////    try
        ////    {
        ////        await _context.SaveChangesAsync();
        ////    }
        ////    catch (DbUpdateConcurrencyException)
        ////    {
        ////        if (!RecipesExists(id))
        ////        {
        ////            return NotFound();
        ////        }
        ////        else
        ////        {
        ////            throw;
        ////        }
        ////    }

        ////    return NoContent();
        ////}

    }
}