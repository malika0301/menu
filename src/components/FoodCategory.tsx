import { motion } from 'framer-motion';

const FoodCategory = () => {
  const categories = [
    { id: 1, name: 'Save 50%', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop', isSpecial: true },
    { id: 2, name: 'Fast Food Dish', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop' },
    { id: 3, name: 'Breakfast', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=400&fit=crop' },
    { id: 4, name: 'Dessert', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop' },
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-great-vibes text-primary text-2xl">Food Category</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-primary">Choose Food</span>{' '}
            <span className="text-white">Iteam</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <div className="relative h-80 overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {category.isSpecial && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full font-semibold">
                    {category.name}
                  </div>
                )}
                
                {!category.isSpecial && (
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
