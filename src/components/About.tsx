import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
  const features = [
    'Lacus nisi, et ac dapibus sit eu velit in consequat.',
    'Quisque diam pellentesque bibendum non dui volutpat fringilla',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  ];

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background Leaves */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-10">
        <img src="https://cdn-icons-png.flaticon.com/512/628/628283.png" alt="leaf" className="leaf-float" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="font-great-vibes text-primary text-2xl">About us</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary">We</span>{' '}
              <span className="text-white">Create the best</span>
              <br />
              <span className="text-white">foody product</span>
            </h2>
            
            <p className="text-gray-400 mb-6 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="text-white mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <button className="bg-primary hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Read More
            </button>
          </motion.div>

          {/* Right Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop"
              alt="Food 1"
              className="w-full h-64 object-cover rounded-lg col-span-2"
            />
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop"
              alt="Food 2"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop"
              alt="Food 3"
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
