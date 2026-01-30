
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[4rem] overflow-hidden py-32 px-8 md:px-24 text-center shadow-2xl">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
              alt="Mountain Expedition" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-teal-950/80 backdrop-blur-[3px]"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-white text-5xl md:text-7xl font-serif font-bold mb-10 leading-[1.1]">
              Unlock New Horizons <br />With Saishree Travels
            </h2>
            <p className="text-teal-50 text-xl md:text-2xl mb-14 font-medium opacity-90 max-w-2xl mx-auto">
              Ready for a stress-free journey across Maharashtra? Join thousands of satisfied travelers today.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-teal-900 px-12 py-6 rounded-2xl text-xl font-bold hover:bg-teal-50 transition-all shadow-2xl active:scale-95">
                Book My Ride
              </button>
              <button className="bg-transparent text-white px-12 py-6 rounded-2xl text-xl font-bold border-2 border-white/30 hover:bg-white/10 transition-all backdrop-blur-md">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
