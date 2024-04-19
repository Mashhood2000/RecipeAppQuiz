// controllers/ingredient.controller.js
import Ingredient from '../models/ingredient.model.js';


export const addIngredient = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newIngredient = new Ingredient({ name, description });
    await newIngredient.save();
    res.status(201).json({ message: 'Ingredient added successfully!', ingredient: newIngredient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
