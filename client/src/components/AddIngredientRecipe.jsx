import { useState, useEffect } from 'react';

const AddIngredientRecipe = () => {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch existing ingredients
    const fetchIngredients = async () => {
      try {
        const response = await fetch('/api/ingredients');
        if (response.ok) {
          const data = await response.json();
          setIngredients(data);
        } else {
          throw new Error('Failed to fetch ingredients');
        }
      } catch (error) {
        console.error('Failed to fetch ingredients:', error);
      }
    };
    fetchIngredients();
  }, []);

  const handleAddIngredient = async () => {
    try {
      console.log()
      const response = await fetch('/api/ingredients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newIngredient })
      });
      if (response.ok) {
        const data = await response.json();
        setIngredients([...ingredients, data]);
        setNewIngredient('');
      } else {
        throw new Error('Failed to add ingredient');
      }
    } catch (error) {
      console.error('Failed to add ingredient:', error);
    }
  };

  const handleAddRecipe = async () => {
    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: recipeName,
          ingredients: selectedIngredients.map(ingredient => ingredient._id),
        })
      });
      if (response.ok) {
        const data = await response.json();
        setRecipe(data);
      } else {
        throw new Error('Failed to add recipe');
      }
    } catch (error) {
      console.error('Failed to add recipe:', error);
    }
  };

  return (
    <div>
      <h1>Add Ingredient and Recipe</h1>
      <div>
        <h2>Add Ingredient</h2>
        <input
          type="text"
          placeholder="Ingredient name"
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
        />
        <button onClick={handleAddIngredient}>Add Ingredient</button>
      </div>
      <div>
        <h2>Add Recipe</h2>
        <input
          type="text"
          placeholder="Recipe name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <select
          multiple
          value={selectedIngredients.map(ingredient => ingredient._id)}
          onChange={(e) => {
            const selectedIds = Array.from(e.target.selectedOptions, option => option.value);
            setSelectedIngredients(ingredients.filter(ingredient => selectedIds.includes(ingredient._id)));
          }}
        >
          {ingredients.map(ingredient => (
            <option key={ingredient._id} value={ingredient._id}>{ingredient.name}</option>
          ))}
        </select>
        <button onClick={handleAddRecipe}>Add Recipe</button>
      </div>
      {recipe && (
        <div>
          <h2>Recipe Details</h2>
          <p>Name: {recipe.name}</p>
          <p>Ingredients: {recipe.ingredients.map(ingredient => ingredient.name).join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default AddIngredientRecipe;
