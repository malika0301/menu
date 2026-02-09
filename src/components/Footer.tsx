import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Clock, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const recentPosts = [
    {
      id: 1,
      title: 'Keep Your Business',
      date: '20 Feb 2022',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      title: 'Keep Your Business',
      date: '20 Feb 2022',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      title: 'Keep Your Business',
      date: '20 Feb 2022',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=100&h=100&fit=crop'
    }
  ];

  return (
    <footer className="bg-dark pt-20 pb-6">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-dark-lighter rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              <span className="text-primary">Still</span> You Need Our Support ?
            </h3>
            <p className="text-gray-400">Don't wait make a smart & logical quote here. Its pretty easy.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 md:w-64 px-4 py-3 bg-white rounded text-dark focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary hover:bg-yellow-600 text-white px-6 py-3 rounded font-semibold transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-800">
          {/* About Us */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">About Us</h3>
            <p className="text-gray-400 mb-6">
              Corporate clients and leisure travelers has been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World.
            </p>
            <div className="flex items-start gap-3">
              <Clock className="text-primary mt-1" size={24} />
              <div>
                <p className="text-white font-semibold">Opening Hours</p>
                <p className="text-gray-400">Mon - Sat(8.00 - 6.00)</p>
                <p className="text-gray-400">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {['About', 'News', 'Partners', 'Team', 'Menu', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Help?</h3>
            <ul className="space-y-3">
              {['FAQ', 'Terms & Condition', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Recent Post</h3>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex gap-3 group cursor-pointer">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <h4 className="text-gray-300 group-hover:text-primary transition-colors text-sm mb-1">
                      {post.title}
                    </h4>
                    <p className="text-gray-500 text-xs">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded bg-dark-lighter flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon size={20} className="text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
