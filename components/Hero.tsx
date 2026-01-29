
import React from 'react';
import BookingBar from './BookingBar';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2000&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mb-16">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.1] mb-6 drop-shadow-sm">
          Premium Travel <br />
          Experience in <span className="text-teal-400">Nashik</span>
        </h1>
        <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          Professional chauffeur-driven car rental services for local, 
          airport, and outstation tours across Maharashtra.
        </p>
      </div>

      {/* Booking Bar Component */}
      <BookingBar />
    </section>
  );
};

export default Hero;
