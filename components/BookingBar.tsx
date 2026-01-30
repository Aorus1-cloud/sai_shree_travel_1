
import React, { useState } from 'react';
import { MapPin, Clock, Calendar, Smartphone, Search } from 'lucide-react';

const BookingBar: React.FC = () => {
  const [carType, setCarType] = useState('Sedan');

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="bg-white rounded-[3rem] lg:rounded-[4rem] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.15)] p-8 lg:p-14 border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Locations */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-3">
              <label className="text-[13px] font-black text-gray-900 tracking-tight ml-2">Where to pick up</label>
              <div className="flex items-center bg-gray-50 rounded-[2rem] px-6 py-5 border border-gray-100 focus-within:border-primary focus-within:bg-white transition-all shadow-sm">
                <MapPin className="w-5 h-5 text-gray-400 mr-4 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Enter City, location, area" 
                  className="bg-transparent w-full text-sm font-bold text-gray-800 focus:outline-none placeholder-gray-400"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[13px] font-black text-gray-900 tracking-tight ml-2">Destination</label>
              <div className="flex items-center bg-gray-50 rounded-[2rem] px-6 py-5 border border-gray-100 focus-within:border-primary focus-within:bg-white transition-all shadow-sm">
                <MapPin className="w-5 h-5 text-gray-400 mr-4 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Enter City, location, area" 
                  className="bg-transparent w-full text-sm font-bold text-gray-800 focus:outline-none placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Car Type */}
          <div className="lg:col-span-4 space-y-3">
            <label className="text-[13px] font-black text-gray-900 tracking-tight ml-2">Car type</label>
            <div className="flex space-x-4">
              <button 
                onClick={() => setCarType('Sedan')}
                className={`flex-1 flex flex-col items-center justify-center p-6 rounded-[2rem] border-2 transition-all ${carType === 'Sedan' ? 'bg-primary border-primary text-white shadow-xl shadow-primary/30' : 'bg-white border-gray-100 text-gray-400 hover:border-primary/40'}`}
              >
                <div className={`w-10 h-3 bg-current opacity-20 rounded-full mb-3 ${carType === 'Sedan' ? 'opacity-40' : ''}`}></div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Sedan</span>
              </button>
              <button 
                onClick={() => setCarType('SUV')}
                className={`flex-1 flex flex-col items-center justify-center p-6 rounded-[2rem] border-2 transition-all ${carType === 'SUV' ? 'bg-primary border-primary text-white shadow-xl shadow-primary/30' : 'bg-white border-gray-100 text-gray-400 hover:border-primary/40'}`}
              >
                <div className={`w-12 h-4 bg-current opacity-20 rounded-full mb-3 ${carType === 'SUV' ? 'opacity-40' : ''}`}></div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">SUV</span>
              </button>
            </div>
          </div>

          {/* Times and Contacts */}
          <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="space-y-3">
              <label className="text-[13px] font-black text-gray-900 tracking-tight ml-2">Pickup Time and Date</label>
              <div className="flex bg-gray-50 rounded-[2rem] border border-gray-100 focus-within:border-primary focus-within:bg-white overflow-hidden shadow-sm">
                <div className="flex-1 flex items-center px-4 py-5 border-r border-gray-100">
                   <Clock className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                   <input type="time" className="text-[11px] font-bold text-gray-800 bg-transparent w-full" />
                </div>
                <div className="flex-1 flex items-center px-4 py-5">
                   <Calendar className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                   <input type="date" className="text-[11px] font-bold text-gray-800 bg-transparent w-full" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[13px] font-black text-gray-900 tracking-tight ml-2">Return Time and Date</label>
              <div className="flex bg-gray-50 rounded-[2rem] border border-gray-100 focus-within:border-primary focus-within:bg-white overflow-hidden shadow-sm">
                <div className="flex-1 flex items-center px-4 py-5 border-r border-gray-100">
                   <Clock className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                   <input type="time" className="text-[11px] font-bold text-gray-800 bg-transparent w-full" />
                </div>
                <div className="flex-1 flex items-center px-4 py-5">
                   <Calendar className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                   <input type="date" className="text-[11px] font-bold text-gray-800 bg-transparent w-full" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[13px] font-black text-gray-900 tracking-tight ml-2">Contact Phone</label>
              <div className="flex items-center bg-gray-50 rounded-[2rem] px-6 py-5 border border-gray-100 focus-within:border-primary focus-within:bg-white transition-all shadow-sm">
                <Smartphone className="w-5 h-5 text-gray-400 mr-4 shrink-0" />
                <input 
                  type="tel" 
                  placeholder="+91 Phone Number" 
                  className="bg-transparent w-full text-sm font-bold text-gray-800 focus:outline-none placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="lg:col-span-2 flex flex-col justify-end">
            <button className="w-full bg-secondary hover:bg-teal-600 text-white flex items-center justify-center py-5 rounded-[2rem] font-black shadow-[0_20px_40px_-10px_rgba(20,184,166,0.4)] transition-all active:scale-95 group">
               <span className="mr-3">Search Car</span>
               <Search size={22} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingBar;
