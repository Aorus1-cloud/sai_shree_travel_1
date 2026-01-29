
import React from 'react';
import { Users, Briefcase, Zap, Settings2 } from 'lucide-react';
import { VEHICLES } from '../constants';

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-teal-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Elite Fleet</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-6">Choose Your Perfect Ride</h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Immaculately maintained vehicles for every occasion, 
            driven by professional chauffeurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {VEHICLES.map((vehicle) => (
            <div key={vehicle.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-6 px-4 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-900">
                  {vehicle.type}
                </div>
                <div className="absolute bottom-6 right-6 px-5 py-2 bg-teal-500 text-white rounded-full text-sm font-bold shadow-lg">
                  {vehicle.pricePerKm}/km
                </div>
              </div>

              <div className="p-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-8">{vehicle.name}</h4>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-teal-600">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-gray-600">{vehicle.seats} Seats</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-teal-600">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-gray-600">{vehicle.luggage} Space</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-teal-600">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-gray-600">{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-teal-600">
                      <Settings2 className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-gray-600">{vehicle.transmission}</span>
                  </div>
                </div>

                <button className="w-full bg-gray-900 hover:bg-teal-500 text-white py-5 rounded-2xl font-bold transition-all flex items-center justify-center space-x-2 group-hover:shadow-xl group-hover:shadow-teal-500/20">
                  <span>Book {vehicle.name}</span>
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
