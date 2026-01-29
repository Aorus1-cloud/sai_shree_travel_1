
import React from 'react';
import { MapPin, Car, Calendar, Phone, Search } from 'lucide-react';

const BookingBar: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 -mt-16 md:-mt-24 relative z-30">
      <div className="bg-white p-2 rounded-3xl md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          
          {/* Select Vehicle */}
          <div className="p-4 flex items-center space-x-3 transition-colors hover:bg-gray-50 rounded-t-3xl lg:rounded-none">
            <Car className="w-5 h-5 text-teal-500 shrink-0" />
            <div className="text-left w-full">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Vehicle</p>
              <select className="bg-transparent text-gray-900 text-sm font-bold w-full focus:outline-none cursor-pointer appearance-none border-none p-0">
                <option>Swift Dzire</option>
                <option>Ertiga (6+1)</option>
                <option>Innova Crysta</option>
                <option>Tempo Traveller</option>
              </select>
            </div>
          </div>

          {/* From */}
          <div className="p-4 flex items-center space-x-3 transition-colors hover:bg-gray-50">
            <MapPin className="w-5 h-5 text-teal-500 shrink-0" />
            <div className="text-left w-full">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">From</p>
              <input type="text" placeholder="Pickup location" defaultValue="Nashik" className="bg-transparent text-gray-900 text-sm font-bold w-full focus:outline-none placeholder-gray-300" />
            </div>
          </div>

          {/* To */}
          <div className="p-4 flex items-center space-x-3 transition-colors hover:bg-gray-50">
            <MapPin className="w-5 h-5 text-teal-500 shrink-0" />
            <div className="text-left w-full">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">To</p>
              <input type="text" placeholder="Destination" className="bg-transparent text-gray-900 text-sm font-bold w-full focus:outline-none placeholder-gray-300" />
            </div>
          </div>

          {/* Pickup Date */}
          <div className="p-4 flex items-center space-x-3 transition-colors hover:bg-gray-50">
            <Calendar className="w-5 h-5 text-teal-500 shrink-0" />
            <div className="text-left w-full">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Pickup Date</p>
              <input type="date" className="bg-transparent text-gray-900 text-sm font-bold w-full focus:outline-none cursor-pointer" />
            </div>
          </div>

          {/* Phone Number */}
          <div className="p-4 flex items-center space-x-3 transition-colors hover:bg-gray-50">
            <Phone className="w-5 h-5 text-teal-500 shrink-0" />
            <div className="text-left w-full">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Phone</p>
              <input type="tel" placeholder="Enter number" className="bg-transparent text-gray-900 text-sm font-bold w-full focus:outline-none placeholder-gray-300" />
            </div>
          </div>

          {/* Travel/Return Date */}
          <div className="p-4 flex items-center space-x-3 transition-colors hover:bg-gray-50">
            <Calendar className="w-5 h-5 text-teal-500 shrink-0" />
            <div className="text-left w-full">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Travel Date</p>
              <input type="date" className="bg-transparent text-gray-900 text-sm font-bold w-full focus:outline-none cursor-pointer" />
            </div>
          </div>

          {/* Action */}
          <div className="p-2 lg:p-3">
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white flex items-center justify-center space-x-2 py-4 lg:h-full rounded-2xl lg:rounded-3xl transition-all shadow-xl shadow-teal-500/20 active:scale-95">
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
