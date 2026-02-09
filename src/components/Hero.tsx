import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Hero = () => {
  const leaves = [
    { id: 1, top: '10%', left: '5%', delay: 0 },
    { id: 2, top: '20%', right: '10%', delay: 1 },
    { id: 3, bottom: '15%', left: '8%', delay: 2 },
    { id: 4, top: '50%', right: '5%', delay: 1.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark pt-20">
      {/* Animated Leaves Background */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute w-32 h-32 opacity-20"
          style={{
            top: leaf.top,
            left: leaf.left,
            right: leaf.right,
            bottom: leaf.bottom,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: leaf.delay,
          }}
        >
          <img src="https://cdn-icons-png.flaticon.com/512/1839/1839334.png" alt="leaf" className="w-full h-full" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-[2px] bg-primary"></div>
            <span className="font-great-vibes text-primary text-2xl">Its Quick & Amusing!</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-primary">The Art of speed</span>
            <br />
            <span className="text-white">food Quality</span>
          </h1>
          
          <p className="text-gray-400 mb-8 text-lg max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
          </p>
          
          <button className="bg-primary hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            See Menu
          </button>

          {/* Social Icons */}
          <div className="mt-12 flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop"
              alt="Featured Dish"
              className="w-full rounded-full shadow-2xl shadow-primary/20"
            />
            {/* Green Leaf Decoration */}
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/628/628283.png"
              alt="leaf decoration"
              className="absolute -right-10 top-0 w-32 h-32 opacity-80"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
