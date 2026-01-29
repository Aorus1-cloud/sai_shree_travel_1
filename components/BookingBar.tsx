
import React from 'react';
import { MapPin, Car, Calendar, Phone, Search } from 'lucide-react';
import { VEHICLES } from '../constants';

const BookingBar: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-gray-900/90 backdrop-blur-xl p-2 rounded-3xl shadow-2xl border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 items-center">
          
          {/* Select Vehicle */}
          <div className="p-4 flex items-center space-x-3 border-b md:border-b-0 md:border-r border-white/10 group cursor-pointer transition-colors hover:bg-white/5">
            <Car className="w-5 h-5 text-teal-400 shrink-0" />
            <div className="text-left">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Select Vehicle</p>
              <select className="bg-transparent text-white text-sm font-bold w-full focus:outline-none cursor-pointer appearance-none">
                <option className="bg-gray-900">Swift Dzire</option>
                <option className="bg-gray-900">Ertiga</option>
                <option className="bg-gray-900">Innova Crysta</option>
                <option className="bg-gray-900">Tempo Traveller</option>
              </select>
            </div>
          </div>

          {/* From Location */}
          <div className="p-4 flex items-center space-x-3 border-b md:border-b-0 md:border-r border-white/10 group cursor-pointer transition-colors hover:bg-white/5">
            <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
            <div className="text-left">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">From Where?</p>
              <input type="text" placeholder="Pickup City" className="bg-transparent text-white text-sm font-bold w-full focus:outline-none placeholder-gray-600" defaultValue="Nashik" />
            </div>
          </div>

          {/* To Location */}
          <div className="p-4 flex items-center space-x-3 border-b lg:border-b-0 lg:border-r border-white/10 group cursor-pointer transition-colors hover:bg-white/5">
            <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
            <div className="text-left">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">To Where?</p>
              <input type="text" placeholder="Destination" className="bg-transparent text-white text-sm font-bold w-full focus:outline-none placeholder-gray-600" />
            </div>
          </div>

          {/* Date */}
          <div className="p-4 flex items-center space-x-3 border-b md:border-b-0 md:border-r border-white/10 group cursor-pointer transition-colors hover:bg-white/5">
            <Calendar className="w-5 h-5 text-teal-400 shrink-0" />
            <div className="text-left">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Date</p>
              <input type="date" className="bg-transparent text-white text-sm font-bold w-full focus:outline-none" />
            </div>
          </div>

          {/* Phone */}
          <div className="p-4 flex items-center space-x-3 group cursor-pointer transition-colors hover:bg-white/5">
            <Phone className="w-5 h-5 text-teal-400 shrink-0" />
            <div className="text-left">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Phone</p>
              <input type="tel" placeholder="Enter number" className="bg-transparent text-white text-sm font-bold w-full focus:outline-none placeholder-gray-600" />
            </div>
          </div>

          {/* Action Button */}
          <div className="p-2">
            <button className="w-full bg-teal-500 hover:bg-teal-400 text-white flex items-center justify-center space-x-2 py-4 rounded-2xl transition-all shadow-lg hover:shadow-teal-500/40">
              <Search className="w-5 h-5" />
              <span className="font-bold">Book Now</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingBar;
