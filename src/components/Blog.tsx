import { motion } from 'framer-motion';
import { Calendar, MessageCircle, User, ThumbsUp } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
      date: '10 February 2022',
      comments: 3,
      likes: 32,
      author: 'Admin'
    },
    {
      id: 2,
      title: 'Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop',
      date: '10 February 2022',
      comments: 5,
      likes: 45,
      author: 'Admin'
    },
    {
      id: 3,
      title: 'Curabitur rutrum velit ac congue malesuada',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop',
      date: '10 February 2022',
      comments: 8,
      likes: 67,
      author: 'Admin'
    }
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-great-vibes text-primary text-2xl">Blog Post</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-primary">Latest News</span>{' '}
            <span className="text-white">& Blog</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-lighter rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded">
                  {post.date.split(' ')[0]} {post.date.split(' ')[1].slice(0, 3)}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={16} />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-lg mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <button className="text-primary hover:text-white transition-colors font-semibold">
                    Learn More →
                  </button>
                  <div className="flex items-center gap-1 text-gray-400">
                    <ThumbsUp size={16} />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
