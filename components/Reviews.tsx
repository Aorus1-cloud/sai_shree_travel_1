
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-6">What Our Travelers Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-gray-50 p-10 rounded-[2.5rem] relative group hover:bg-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center text-white opacity-20 group-hover:opacity-100 transition-opacity">
                <Quote className="w-6 h-6" />
              </div>
              
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 text-lg italic mb-8 leading-relaxed">
                "{review.content}"
              </p>

              <div className="flex items-center space-x-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-teal-600 text-xs font-bold uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
