import Hero from '../components/Hero';
import About from '../components/About';
import FoodCategory from '../components/FoodCategory';
import Menu from '../components/Menu';
import Stats from '../components/Stats';
import Chefs from '../components/Chefs';
import Testimonials from '../components/Testimonials';
import VideoSection from '../components/VideoSection';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <FoodCategory />
      <Menu />
      <Stats />
      <Chefs />
      <Testimonials />
      <VideoSection />
      <Blog />
    </div>
  );
};

export default Home;
