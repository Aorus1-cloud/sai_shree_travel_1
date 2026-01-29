
import React from 'react';
import { Car, Plane, MapPin, Package, Clock } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  Car: <Car className="w-6 h-6" />,
  Plane: <Plane className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Package: <Package className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="max-w-xl">
            <h2 className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold">Comprehensive Travel <br />Solutions Just for You</h3>
          </div>
          <p className="text-gray-500 max-w-md">
            Whether it's a quick trip to the airport or a week-long tour of Maharashtra, 
            we provide the most reliable transportation services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="group p-8 rounded-3xl bg-gray-50 hover:bg-teal-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-teal-500/20">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                {iconMap[service.icon]}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
