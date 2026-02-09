import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';
import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <img src="https://cdn-icons-png.flaticon.com/512/1839/1839334.png" alt="leaf" className="leaf-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="font-great-vibes text-primary text-2xl">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-primary">What our client</span>{' '}
            <span className="text-white">are saying</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white text-dark rounded-lg p-8 md:p-12 relative"
            >
              {/* Quote Icon */}
              <Quote className="text-primary/20 absolute top-4 left-4" size={60} />

              {/* Client Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full border-4 border-primary"
                />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-center text-lg mb-6 relative z-10">
                {testimonials[currentIndex].text}
              </p>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-2xl">
                    {i < testimonials[currentIndex].rating ? <FaStar /> : <CiStar />}
                  </span>
                ))}
              </div>

              {/* Client Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-dark">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-500">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-dark border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-dark border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
