
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden -mt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[center_top] bg-no-repeat transition-transform duration-1000"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 w-full text-center">
        <div className="inline-block mb-8 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
          <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">Safe • Reliable • Premium</span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.1] mb-8">
          Your Premium Journey <br />
          Starts with <span className="text-teal-400 underline decoration-teal-500/30 underline-offset-8">Saishree</span>
        </h1>
        
        <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          The best way to explore Maharashtra. We provide more than just a ride; we provide a safe and professional travel experience.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-2xl shadow-teal-500/40">
            View Fleet
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-10 py-5 rounded-2xl text-lg font-bold transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
