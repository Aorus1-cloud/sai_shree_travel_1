
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../constants';

const Destinations: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <h2 className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-4">Trending Destinations</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold">The Most Popular Places <br />to Explore in Maharashtra</h3>
          </div>
          <Link to="/tours" className="group flex items-center space-x-3 text-gray-900 font-bold text-lg hover:text-teal-500 transition-colors">
            <span>See All Tours</span>
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-teal-500 group-hover:border-teal-500 group-hover:text-white transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.slice(0, 3).map((dest) => (
            <div key={dest.id} className="relative h-[450px] group rounded-[2.5rem] overflow-hidden shadow-lg">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h4 className="text-3xl font-serif text-white font-bold mb-3">{dest.name}</h4>
                <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {dest.description}
                </p>
                <button className="flex items-center space-x-2 text-teal-400 font-bold text-sm uppercase tracking-widest">
                  <span>Explore Route</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
