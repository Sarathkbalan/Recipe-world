import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

 
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
    show: { opacity: 1, y: 0 }
  };

  

  return (
    <motion.footer 
      className="bg-gradient-to-r from-red-500 to-yellow-500 text-white pt-12 pb-6 px-4"
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <motion.div variants={item}>
            <h3 className="text-xl font-bold mb-4 font-serif">Recipe World</h3>
            <p className="text-white text-opacity-90">
              Discover delicious recipes from around the world. Cook like a pro with our step-by-step guides.
            </p>
          </motion.div>

         
          <motion.div variants={item} className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 font-serif">Newsletter</h3>
            <p className="mb-4 text-white text-opacity-90">
              Subscribe to get weekly recipe inspiration delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-lg flex-grow text-gray-800 bg-white focus:outline-none"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-500 font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition"
                type="submit"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <SocialMediaIcons />
       
          </motion.div>
       
        <motion.div 
          className="text-center text-white text-opacity-80 pt-6 border-t border-white border-opacity-20"
          variants={item}
        >
          <p>
            &copy; {currentYear} Recipe World. Made with <FaHeart className="inline text-red-700" /> by Food Lovers.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;