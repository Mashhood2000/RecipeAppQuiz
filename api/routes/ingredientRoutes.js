import express from 'express';
const router = express.Router();

import { addIngredient } from '../controllers/ingredient.controller.js';
import { addIngredientToRecipe } from '../controllers/recipe.controller.js';

// Route for adding a new ingredient
router.post('/ingredients', addIngredient);


export default router;
