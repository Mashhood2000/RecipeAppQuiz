import Recipe from '../models/recipe.model.js';

export const addIngredientToRecipe = async (req, res) => {
  const { recipeId, ingredientId } = req.params;

  try {
    const recipe = await Recipe.findByIdAndUpdate(recipeId, {
      $push: { ingredients: ingredientId }
    }, { new: true });

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
