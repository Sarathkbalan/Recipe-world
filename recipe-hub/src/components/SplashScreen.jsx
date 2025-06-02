import React from 'react';
import Lottie from 'lottie-react';
import cookingAnimation from '../assets/Animation - 1748632482727.json';

function SplashScreen() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-yellow-100 via-orange-200 to-red-100 relative overflow-hidden">
    
      <div className="absolute w-96 h-96 bg-pink-400 rounded-full opacity-30 blur-3xl top-20 left-10 animate-pulse" />
      <div className="absolute w-72 h-72 bg-green-300 rounded-full opacity-20 blur-2xl bottom-20 right-10 animate-pulse" />

      <div className="w-80 h-80 mb-80 " aria-label="Chef cooking animation" role="img">
        <Lottie animationData={cookingAnimation} loop autoplay />
      <h1 className="mt-2 text-4xl font-bold text-gray-800 animate-pulse">
        Cooking Up Your Recipe World...
      </h1>
      </div>

     
    </div>
  );
}

export default SplashScreen;
