import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/Carousel';
import SplashScreen from '../components/SplashScreen';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background3D from '../components/Background3D';
import Lottie from 'lottie-react';
import cookingAnimation from '../assets/Animation - 1748847349332.json';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      const temp = [];
      for (let i = 0; i < 4; i++) {
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        temp.push(res.data.meals[0]);
      }
      setRecipes(temp);
      setLoading(false);
    };
    fetchRandomRecipes();
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <div className="relative min-h-screen overflow-hidden">
     

      <div className="absolute top-10 left-5 w-72 h-72 bg-pink-900 rounded-full opacity-30 blur-3xl animate-pulse mix-blend-multiply" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-900 rounded-full opacity-25 blur-2xl animate-pulse mix-blend-multiply" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-yellow-700 rounded-full opacity-20 blur-3xl animate-pulse mix-blend-multiply" />

      
      <div className="relative z-10 drop-shadow-2xl shadow-black container mx-auto px-6 py-10 rounded-3xl shadow-2xl backdrop-blur-md bg-gradient-to-r from-red-200 via-orange-50 to-yellow-200 ring-1 ring-white/10">
      
       
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
        </motion.div>

        
        <motion.div
          className="relative h-80 w-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
         
          <div className="h-2 w-full flex justify-center items-center " aria-label="Chef cooking animation" role="img">
            <Lottie animationData={cookingAnimation} loop autoplay className="w-1/2" />
            <Lottie animationData={cookingAnimation} loop autoplay className="w-1/2" />
            <Lottie animationData={cookingAnimation} loop autoplay className="w-1/2" />
            <Lottie animationData={cookingAnimation} loop autoplay className="w-1/2" />

          </div>

          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl px-4">
            <div className="backdrop-blur-sm bg-white/70 p-4 rounded-xl shadow-lg">
              <SearchBar setRecipes={setRecipes} />
            </div>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="relative h-154 w-full drop-shadow-xl shadow-black rounded-xl shadow-xl overflow-hidden my-6"
        >
          <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source src="/188317-882243111_medium.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        
        <motion.h2
          className="text-3xl font-extrabold font-serif my-6 text-red-700 drop-shadow-md italic tracking-wide"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Random Recipes
        </motion.h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {recipes.map(recipe => (
            <motion.div
              key={recipe.idMeal}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <RecipeCard recipe={recipe} />
            </motion.div>
          ))}
        </div>

        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Carousel />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="relative h-84 w-full rounded-xl shadow-xl overflow-hidden my-6"
        >
          <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source src="/124830-732633115_small.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

       
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Footer />
        </motion.div>

      </div>
    </div>
  );
}

export default Home;
