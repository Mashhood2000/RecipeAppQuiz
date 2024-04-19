// routes/recipe.route.js
import express from 'express';
const router = express.Router();

import { addIngredient } from '../controllers/ingredient.controller.js';
import { addIngredientToRecipe } from '../controllers/recipe.controller.js';

router.post('/:recipeId/add-ingredient/:ingredientId',addIngredientToRecipe);

export default router;
