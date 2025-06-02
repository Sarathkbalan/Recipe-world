import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SocialMediaIcons from '../components/SocialMediaIcons';
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Background3D from '../components/Background3D';
import Lottie from "lottie-react";
import backArrowAnimation from "../assets/Animation - 1748842502846.json"; 

function RecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => setRecipe(res.data.meals[0]));
  }, [id]);

  if (!recipe) return <div className="text-center mt-20 text-gray-700 font-semibold">Loading...</div>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) ingredients.push(`${ingredient} - ${measure}`);
  }

  return (
    <>
      <div className="mt-2 w-full">
        <Navbar />
      </div>

      <Background3D />

       <div className="min-h-screen bg-gradient-to-br from-blue-300 via-orange-200 to-blue-300 p-6 font-sans text-gray-800">
        <div className="pointer-events-none fixed top-16 left-10 w-64 h-64 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="pointer-events-none fixed bottom-20 right-16 w-48 h-48 bg-green-300 rounded-full opacity-15 blur-2xl animate-pulse" />

        <div className="flex flex-col items-start mb-6">
        <button
      onClick={() => navigate("/")}
      className="flex items-center h-8 space-x-2 text-xl px-4 py-2 border-2 border-blue-500 hover:border-white bg-white text-black rounded-md shadow-lg hover:bg-blue-500 transition"
      aria-label="Go back"
    >
      <div className="w-10 h-10">
        <Lottie animationData={backArrowAnimation} loop autoplay />
      </div>
      <span>Back</span>
    </button>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-start gap-8 bg-gray-200 backdrop-blur-sm border border-white/20 drop-shadow-2xl border-2 border-yellow-500 rounded-3xl shadow-lg max-w-7xl mx-auto p-8 relative z-10">
         
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full xl:w-1/2 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />

         
          <div className="w-full xl:w-1/2">
            <h1 className="text-4xl font-extrabold mb-3 text-blue-600 border-b-4 border-blue-300 inline-block pb-1 animate-pulse">
              {recipe.strMeal}
            </h1>
            <p className="text-gray-800 mb-2 font-medium tracking-wide">
              Category: <span className="font-semibold">{recipe.strCategory}</span> | Region: <span className="font-semibold">{recipe.strArea}</span>
            </p>
            <p className="text-gray-600 mb-6 italic">Estimated Cooking Time: <strong>30 mins</strong></p>

            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-400 inline-block animate-pulse">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1 mb-6">
              {ingredients.map((item, idx) => (
                <li
                  key={idx}
                  className="text-lg cursor-pointer hover:text-red-500 hover:scale-105 transition transform duration-200"
                  title="Click for fun!"
                  onClick={() => alert(`Yummy! ${item}`)}
                >
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-400 inline-block animate-pulse">Instructions</h2>

            <div className="mt-8">
              <div>
                <p className="whitespace-pre-wrap text-gray-800 leading-relaxed text-lg">{recipe.strInstructions}</p>

              </div>
              <SocialMediaIcons />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="relative mt-12 h-84 w-full rounded-xl shadow-xl overflow-hidden"
        >
          <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source src="/152834-804130720_small.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default RecipePage;
