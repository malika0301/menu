import { motion } from 'framer-motion';
import { chefs } from '../data/mockData';

const Chefs = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-great-vibes text-primary text-2xl">Chefs</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-primary">Meet Our</span>{' '}
            <span className="text-white">Chef</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-white text-xl font-semibold text-center">{chef.name}</h3>
              <p className="text-gray-400 text-center">{chef.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Chefs;
