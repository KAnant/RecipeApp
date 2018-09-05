﻿using Microsoft.AspNetCore.Cors;
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
        private readonly ApplicationDbContext _context;

        public RecipesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getRecipes")]
        public IList<RecipeModel> GetRecipes()
        {
            var results = (from r in _context.Recipes
                           join i in _context.Ingredients on r.RecipeId equals i.RecipeId
                           join rt in _context.Recipe_Steps on r.RecipeId equals rt.RecipeId
                          // where r.RecipeId == id
                           select new RecipeModel()
                           {
                               RecipeId = r.RecipeId,
                               RecipeName= r.RecipeName,
                               IngredientName = i.IngredientName,
                               Instructions= rt.Instructions
                             
                           }
                         );
            if (results == null)
            {
                return NotFound();
            }

            return Ok(results);
            //return _context.Recipes.Select(r => new RecipesDTO
            //{
            //    RecipeName = r.RecipeName,
            //    Ingredients = r.Ingredients.ToList(),
            //    Recipe_Steps = r.Recipe_Steps.ToList()
            //}).ToList();
        }

        [HttpGet]
        [Route("getRecipesById/{id}")]
        public async Task<IActionResult> GetRecipesById([FromRoute] int id)
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

        [HttpPut]
        [Route("updateRecipes/{id}")]

        public async Task<IActionResult> UpdateRecipes([FromRoute] int id, [FromBody] Recipes recipes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != recipes.RecipeId)
            {
                return BadRequest();
            }
            //var recipe = new Recipes
            //{
            //    RecipeId = recipes.RecipeId,
            //    RecipeName = recipes.RecipeName
              
            //};

            //_context.Update(recipe);
            _context.Entry(recipes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecipesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        [Route("createRecipes")]
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

        [HttpDelete]
        [Route("deleteRecipes/{id}")]
        public async Task<IActionResult> DeleteRecipes([FromRoute] int id)
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

        private bool RecipesExists(int id)
        {
            return _context.Recipes.Any(e => e.RecipeId == id);
        }
    }
}