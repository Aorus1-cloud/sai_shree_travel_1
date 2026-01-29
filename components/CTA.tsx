
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden py-24 px-8 md:px-16 text-center">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop" 
              alt="Adventure" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-teal-900/80 backdrop-blur-[2px]"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-white text-4xl md:text-6xl font-serif font-bold mb-8 leading-[1.2]">
              Ready to Start Your <br />Next Big Adventure?
            </h2>
            <p className="text-teal-100 text-lg md:text-xl mb-12 font-medium">
              Join thousands of satisfied travelers who trust Saishree Tours for their journeys across Maharashtra.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-teal-900 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-teal-50 transition-all shadow-2xl">
                Book My Ride Now
              </button>
              <button className="bg-teal-600 text-white px-10 py-5 rounded-2xl text-lg font-bold border border-teal-500 hover:bg-teal-700 transition-all">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
