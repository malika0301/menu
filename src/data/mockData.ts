import { Testimonial, Chef, Stat } from '../types';
import img1 from '../../img/Group (1).png'
import img2 from '../../img/Group (2).png'
import img3 from '../../img/Group (3).png'
import img4 from '../../img/Group (4).png'

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alamin Hasan',
    role: 'Food Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.',
    rating: 4
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Customer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    text: 'Amazing food quality and service! The atmosphere is incredible and the staff is very professional. Every dish was a masterpiece. Highly recommend to anyone looking for an exceptional dining experience.',
    rating: 5
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Food Critic',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    text: 'The best restaurant experience I have had in years. The presentation, taste, and ambiance are all top-notch. The chef truly knows how to create magic with food.',
    rating: 5
  }
];

export const chefs: Chef[] = [
  {
    id: 1,
    name: 'D. Estwood',
    role: 'Chief Chef',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=500&fit=crop'
  },
  {
    id: 2,
    name: 'D. Scoriesh',
    role: 'Assistant Chef',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=500&fit=crop'
  },
  {
    id: 3,
    name: 'M. William',
    role: 'Advertising Chef',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=500&fit=crop'
  },
  {
    id: 4,
    name: 'W. Readfroad',
    role: 'Chef',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=500&fit=crop'
  }
];

export const stats: Stat[] = [
  {
    icon: img1,
    value: '420',
    label: 'Professional Chefs'
  },
  {
    icon: img2,
    value: '320',
    label: 'Items Of Food'
  },
  {
    icon: img3,
    value: '30+',
    label: 'Years Of Experience'
  },
  {
    icon: img4,
    value: '220',
    label: 'Happy Customers'
  }
];
