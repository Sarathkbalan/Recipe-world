import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Carousel() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(res => {
        setRecipes(res.data.meals.slice(0, 10));
        setIsLoading(false);
      });
  }, []);

 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="my-12 px-4">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-extrabold font-serif font-bold mb-6 text-gray-800"
      >
        Popular Recipes
      </motion.h2>

      {isLoading ? (
        <div className="flex gap-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="min-w-[200px] h-40 bg-gray-200 rounded-lg"
            />
          ))}
        </div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex overflow-x-auto pb-4 gap-6 scrollbar-none overflow-y-hidden"
        >
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.idMeal}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="min-w-[220px] flex-shrink-0"
            >
              <Link to={`/recipe/${recipe.idMeal}`} className="block">
                <motion.div
                  whileHover={{ boxShadow: "0px 10px 15px -3px rgba(148, 41, 41, 0.1)" }}
                  className="bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <div className="relative h-40 overflow-hidden">
                    <motion.img
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
                    >
                      <motion.span 
                        className="text-white font-medium px-3 py-1  bg-opacity-50 rounded-full"
                        initial={{ y: 10 }}
                        whileHover={{ y: 0 }}
                      >
                        View Recipe
                      </motion.span>
                    </motion.div>
                  </div>
                  <motion.p 
                    className="p-3 text-center font-medium text-gray-800"
                    whileHover={{ color: "#EF4444" }}
                  >
                    {recipe.strMeal}
                  </motion.p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default Carousel;