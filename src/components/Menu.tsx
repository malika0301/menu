import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Recipe } from '../types';
import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';

const Menu = () => {
  const [activeTab, setActiveTab] = useState<string>('');

  const getData = async (): Promise<Recipe[]> => {
    let res = await axios.get(`https://dummyjson.com/recipes`);
    return res.data?.recipes;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getData
  });

  // Получаем уникальные типы блюд
  const mealAllTypes = data
    ? [...new Set(data.flatMap((recipe: Recipe) => recipe.mealType))]
    : [];

  // Устанавливаем первую категорию когда данные загрузятся
  useEffect(() => {
    if (mealAllTypes.length > 0 && !activeTab) {
      setActiveTab(mealAllTypes[0]);
    }
  }, [mealAllTypes, activeTab]);

  if (isLoading) {
    return (
      <section className="py-20 bg-dark" id="menu">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-800 rounded w-64 mx-auto mb-4"></div>
            <div className="h-12 bg-gray-800 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-dark" id="menu">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-500">Error loading menu items</p>
        </div>
      </section>
    );
  }

  // Фильтрация данных по активной вкладке
  const filteredData = activeTab
    ? data?.filter((recipe: Recipe) => recipe.mealType.includes(activeTab)) || []
    : data || [];

  return (
    <section className="py-20 bg-dark relative overflow-hidden" id="menu">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
        <img src="https://cdn-icons-png.flaticon.com/512/628/628283.png" alt="leaf" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="font-great-vibes text-primary text-2xl">Choose & pick</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-primary">Fr</span>{' '}
            <span className="text-white">om Our Menu</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {mealAllTypes.map((el) => (
            <button
              key={el}
              onClick={() => setActiveTab(el)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeTab === el
                  ? 'bg-primary text-white'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              {el}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side - Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop"
                alt="Featured Dish"
                className="w-full max-w-md rounded-full shadow-2xl"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-10 -right-10 w-32 h-32 opacity-30"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/628/628283.png" alt="leaf" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Menu Items */}
          <div className="space-y-6">
            {filteredData.slice(0, 4).map((el, index) => (
              <motion.div
                key={el.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 rounded-lg hover:bg-dark-lighter transition-all duration-300 group"
              >
                <img
                  src={el.image}
                  alt={el.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-semibold text-lg group-hover:text-primary transition-colors">
                        {el.name}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-1">
                        {el.ingredients.slice(0, 3).join(', ')}
                      </p>
                    </div>
                    <div className="text-primary font-bold text-lg">
                      ${el.caloriesPerServing % 100 || 12}.99
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>
                          {i < Math.floor(el.rating) ? <FaStar /> : <CiStar />}
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">({el.reviewCount})</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {filteredData.slice(4, 8).map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-lighter p-4 rounded-lg hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-semibold group-hover:text-primary transition-colors">
                  {recipe.name}
                </h3>
                <Coffee className="text-primary" size={20} />
              </div>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                {recipe.cuisine} • {recipe.difficulty}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-bold text-lg">
                  ${recipe.caloriesPerServing % 100 || 15}.99
                </span>
                <div className="flex text-yellow-400 text-sm">
                  {'⭐'.repeat(Math.floor(recipe.rating))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;