import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function RecipeCard({ recipe }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden"
    >
      <Link to={`/recipe/${recipe.idMeal}`}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
          <p className="text-sm text-gray-600">{recipe.strArea} | {recipe.strCategory}</p>
        </div>
      </Link>
    </motion.div>
  );
}


export default RecipeCard;
