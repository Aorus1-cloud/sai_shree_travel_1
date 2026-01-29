
import React from 'react';
import BookingBar from './BookingBar';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden -mt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 w-full text-center">
        <div className="inline-block mb-6 px-4 py-1.5 bg-teal-500/20 backdrop-blur-md border border-teal-500/30 rounded-full">
          <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Explore the Unseen Maharashtra</span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.1] mb-6">
          Crafting Unforgettable <br />
          Journeys for <span className="text-teal-400">Indian Travellers</span>
        </h1>
        
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
          From the serene landscapes of Nashik to the busy streets of Mumbai, 
          we curate premium, hassle-free travel tailored to your style.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-teal-500/40">
            Explore Packages
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-full text-lg font-bold transition-all">
            Plan My Trip
          </button>
        </div>

        {/* Floating Booking Bar */}
        <div className="mt-8">
            <BookingBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
