
import React from 'react';
import { MapPin, Car, Calendar, Phone, Search } from 'lucide-react';

const BookingBar: React.FC = () => {
  return (
    <div className="relative z-20 w-full max-w-7xl mx-auto px-4 -mb-20">
      <div className="bg-white p-3 md:p-5 rounded-3xl md:rounded-full shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          
          {/* 1. Vehicle */}
          <div className="px-6 py-3 lg:py-2">
            <div className="flex items-center space-x-3 mb-1">
              <Car className="w-4 h-4 text-teal-500" />
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Vehicle</span>
            </div>
            <select className="w-full bg-transparent font-bold text-gray-900 focus:outline-none text-sm">
              <option>Swift Dzire</option>
              <option>Ertiga (6+1)</option>
              <option>Innova Crysta</option>
              <option>Tempo Traveller</option>
            </select>
          </div>

          {/* 2. From */}
          <div className="px-6 py-3 lg:py-2">
            <div className="flex items-center space-x-3 mb-1">
              <MapPin className="w-4 h-4 text-teal-500" />
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">From</span>
            </div>
            <input type="text" placeholder="Pickup location" defaultValue="Nashik" className="w-full bg-transparent font-bold text-gray-900 focus:outline-none text-sm placeholder-gray-300" />
          </div>

          {/* 3. To */}
          <div className="px-6 py-3 lg:py-2">
            <div className="flex items-center space-x-3 mb-1">
              <MapPin className="w-4 h-4 text-teal-500" />
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">To</span>
            </div>
            <input type="text" placeholder="Destination" className="w-full bg-transparent font-bold text-gray-900 focus:outline-none text-sm placeholder-gray-300" />
          </div>

          {/* 4. Pickup Date */}
          <div className="px-6 py-3 lg:py-2">
            <div className="flex items-center space-x-3 mb-1">
              <Calendar className="w-4 h-4 text-teal-500" />
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Pickup Date</span>
            </div>
            <input type="date" className="w-full bg-transparent font-bold text-gray-900 focus:outline-none text-sm" />
          </div>

          {/* 5. Phone */}
          <div className="px-6 py-3 lg:py-2">
            <div className="flex items-center space-x-3 mb-1">
              <Phone className="w-4 h-4 text-teal-500" />
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Phone</span>
            </div>
            <input type="tel" placeholder="+91" className="w-full bg-transparent font-bold text-gray-900 focus:outline-none text-sm placeholder-gray-300" />
          </div>

          {/* 6. Travel Date */}
          <div className="px-6 py-3 lg:py-2">
            <div className="flex items-center space-x-3 mb-1">
              <Calendar className="w-4 h-4 text-teal-500" />
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Travel Date</span>
            </div>
            <input type="date" className="w-full bg-transparent font-bold text-gray-900 focus:outline-none text-sm" />
          </div>

          {/* 7. Action */}
          <div className="p-2">
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white flex items-center justify-center space-x-2 py-4 lg:py-6 rounded-full transition-all shadow-xl shadow-teal-500/20 active:scale-95">
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
