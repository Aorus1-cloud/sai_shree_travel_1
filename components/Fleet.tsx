
import React from 'react';
import { Users, Briefcase, Zap, Settings2 } from 'lucide-react';
import { VEHICLES } from '../constants';

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-4">Our Premium Fleet</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-6">Find the Perfect Ride</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From budget-friendly sedans to luxury MUVs and large group travelers, 
            choose from our well-maintained selection of vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VEHICLES.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 uppercase">
                    {vehicle.type}
                  </span>
                </div>
                <div className="absolute bottom-6 right-6">
                  <span className="bg-teal-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                    {vehicle.pricePerKm}/km
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">{vehicle.name}</h4>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-teal-500 transition-colors">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">{vehicle.seats} Seats</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-teal-500 transition-colors">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">{vehicle.luggage}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-teal-500 transition-colors">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-teal-500 transition-colors">
                      <Settings2 className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">{vehicle.transmission}</span>
                  </div>
                </div>

                <button className="w-full bg-gray-900 group-hover:bg-teal-500 text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center space-x-2">
                  <span>View Details</span>
                  <div className="w-1 h-1 bg-white rounded-full group-hover:w-4 transition-all"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
