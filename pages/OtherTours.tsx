
import React from 'react';
import { DESTINATIONS } from '../constants';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const OtherTours: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-teal-600 font-bold mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
        
        <div className="mb-16">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">Explore Our Full <br />Tour Catalog</h1>
          <p className="text-gray-500 max-w-2xl text-lg">
            From pilgrim sites to hill stations, browse our full list of destinations across Maharashtra. 
            All our tours are fully customizable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="group rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{dest.name}</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  {dest.description}
                </p>
                <button className="w-full bg-white text-teal-600 border-2 border-teal-500 py-4 rounded-2xl font-bold hover:bg-teal-500 hover:text-white transition-all">
                  Book This Tour
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherTours;
