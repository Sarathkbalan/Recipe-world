import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function SearchBar({ setRecipes }) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setRecipes(res.data.meals || []);
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center my-8 ">
      
      <motion.button
        onClick={handleSearch}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
        className={`
          relative z-10
          h-14 w-16 rounded-l-lg
          bg-red-600 hover:bg-red-700
          flex items-center justify-center
          border-2 border-gray-800
          shadow-lg
          ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}
        `}
      >
       
        <div className="absolute top-2 left-2 w-8 h-6 bg-blue-200 rounded-sm border border-gray-700 flex">
          
          <div className="h-full w-px bg-gray-700"></div>
        </div>
        
        
        <div className="absolute bottom-1 left-1 w-2 h-2 bg-yellow-300 rounded-full"></div>
        <div className="absolute bottom-1 right-1 w-2 h-2 bg-yellow-300 rounded-full"></div>
        
        {isLoading && (
          <div className="absolute bottom-1 right-4 w-3 h-3 bg-white rounded-full animate-ping"></div>
        )}
      </motion.button>

      
      <motion.div 
        initial={{ scaleX: 0.95 }}
        animate={{ scaleX: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative h-14 bg-gray-200 border-2 border-gray-800 rounded-r-lg shadow-lg flex-grow max-w-md"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What's cooking today?"
          className="w-full h-full px-4 pr-12 bg-transparent outline-none text-gray-800 font-medium"
        />
        
        
        <div className="absolute -bottom-2 left-4 w-6 h-6 bg-gray-800 rounded-full border-2 border-gray-900"></div>
        <div className="absolute -bottom-2 right-4 w-6 h-6 bg-gray-800 rounded-full border-2 border-gray-900"></div>
        
       
        <motion.div
          animate={isLoading ? { 
            opacity: [0, 1, 0],
            y: [0, -2, 0],
            scaleY: [1, 1.2, 1]
          } : {}}
          transition={{ repeat: isLoading ? Infinity : 0, duration: 0.8 }}
          className="absolute top-2 -left-2 w-2 h-4 bg-gray-700 rounded-sm"
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default SearchBar;