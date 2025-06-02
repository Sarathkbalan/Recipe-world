import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className=" shadow-black rounded-lg mb-2 w-full bg-gradient-to-br from-blue-300 via-orange-200 to-blue-300 py-5 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-center">
        <motion.div
          initial={{ 
            opacity: 0,
            rotateX: 90,
            rotateY: -45,
            perspective: "1000px"
          }}
          animate={{ 
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            perspective: "1000px"
          }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 80,
            damping: 15
          }}
          whileHover={{
            rotateY: 180,
            scale: 1.1,
            transition: { duration: 1.2 }
          }}
          style={{
            transformStyle: "preserve-3d",
            display: "inline-block"
          }}
        >
          <motion.h1 
            className="text-4xl font-extrabold text-center text-red-500 font-serif font-bold tracking-wider "
            style={{
              transformStyle: "preserve-3d",
              display: "inline-block",
              padding: "0.5rem 1rem",
              background: "rgba(231, 24, 79, 0.1)",
              borderRadius: "0.5rem",
              boxShadow: "0 10px 20px rgba(185, 166, 166, 0.1)"
            }}
            whileHover={{
              rotateY: 360,
              scale: 1.1,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
              transition: { duration: 1.2 }
            }}
          >
            Recipe World
          </motion.h1>
        </motion.div>
      </div>
      <div class="overflow-hidden   ">
    <marquee class="text-gray-700">
      🍽️ Chicken Biryani &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Sushi Roll &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Spaghetti Carbonara &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Tacos al Pastor &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Pad Thai &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Butter Chicken &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Ramen Bowl &nbsp;&nbsp;&nbsp;
    </marquee>
  </div>
    </nav>
  );
};

export default Navbar;

