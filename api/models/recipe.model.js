import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: [{
    type: Schema.Types.ObjectId,
    ref: 'Ingredient'
  }]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
