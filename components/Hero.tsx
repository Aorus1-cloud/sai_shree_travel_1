
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Bold Typography */}
          <div className="relative z-10 max-w-xl">
            <h1 className="text-6xl lg:text-[100px] font-black text-gray-900 leading-[0.95] tracking-tighter mb-10">
              Rent Premium <br />
              <span className="text-gray-900">Cars</span> <br />
              <span className="text-gray-900/30">easy and fast</span>
            </h1>
            <p className="text-gray-500 text-lg lg:text-xl leading-relaxed mb-12 font-medium max-w-md">
              The ultimate travel experience with the most reliable Innova Crysta fleet in Nashik. 
              Safe, comfortable, and always on time.
            </p>
            <a href="#fleet" className="group inline-flex items-center space-x-3 text-primary font-black text-xl tracking-tight hover:underline underline-offset-8 transition-all">
              <span>See more</span>
              <div className="flex -space-x-1 group-hover:translate-x-2 transition-transform duration-300">
                <ChevronRight size={24} />
                <ChevronRight size={24} className="opacity-40" />
              </div>
            </a>
          </div>

          {/* Right Side: 3D Car Visual with Orange Box Backdrop */}
          <div className="relative flex justify-center items-center py-20 lg:py-0">
            {/* The Specific Orange Box Backdrop from reference */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[90%] h-[110%] bg-primary rounded-[5rem] -z-10 shadow-[0_40px_80px_-15px_rgba(255,122,0,0.3)]"></div>
            
            {/* High-Quality Orange Innova Crysta Image */}
            <div className="relative z-10 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-700 ease-out cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1625032584144-883907c12652?auto=format&fit=crop&q=80&w=1200" 
                alt="Orange Innova Crysta" 
                className="w-full h-auto drop-shadow-[0_70px_50px_rgba(0,0,0,0.5)] contrast-[1.05] brightness-[1.02]"
              />
            </div>

            {/* Floating Info Badge */}
            <div className="absolute -bottom-8 right-0 bg-white p-6 rounded-[2.5rem] shadow-2xl flex items-center space-x-5 border border-gray-50 animate-bounce-slow">
               <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <span className="text-primary font-black text-xl">#1</span>
               </div>
               <div>
                 <p className="text-[11px] uppercase font-black text-gray-400 tracking-[0.2em] leading-none mb-1.5">Top Choice</p>
                 <p className="text-2xl font-black text-gray-900 tracking-tight">Crysta Premium</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
