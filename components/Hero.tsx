
import React from 'react';
import BookingBar from './BookingBar';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-64 bg-white">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-primary/5 rounded-l-[10rem] -z-10 translate-x-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Impactful Headline */}
          <div className="relative z-10 max-w-xl">
            <h1 className="text-6xl lg:text-[100px] font-black text-gray-900 leading-[0.95] tracking-tighter mb-10">
              Rent Premium <br />
              <span className="text-gray-900">Cars</span> <br />
              <span className="text-gray-900/30">easy and fast</span>
            </h1>
            <p className="text-gray-500 text-lg lg:text-xl leading-relaxed mb-12 font-medium max-w-md">
              Experience luxury travel with our professional chauffeur services. 
              The perfect ride for every journey, right here in Nashik.
            </p>
            <a href="#fleet" className="group inline-flex items-center space-x-3 text-primary font-black text-xl tracking-tight hover:underline underline-offset-8 transition-all">
              <span>See more</span>
              <div className="flex -space-x-1 group-hover:translate-x-2 transition-transform duration-300">
                <ChevronRight size={24} />
                <ChevronRight size={24} className="opacity-40" />
              </div>
            </a>
          </div>

          {/* Right Side: 3D Car Visual */}
          <div className="relative flex justify-center items-center">
            {/* The "3D" Backdrop Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[90%] bg-primary rounded-[4rem] rotate-[8deg] -z-10 shadow-[0_30px_60px_-15px_rgba(255,122,0,0.4)]"></div>
            
            {/* Car Image with Floating Effect */}
            <div className="relative z-10 transform hover:-rotate-2 hover:scale-105 transition-all duration-700 ease-out cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=1200" 
                alt="Premium Red MPV" 
                className="w-full h-auto drop-shadow-[0_60px_40px_rgba(0,0,0,0.45)] brightness-105 contrast-110"
              />
            </div>

            {/* Status Badge */}
            <div className="absolute -bottom-6 -left-4 bg-white p-6 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex items-center space-x-5 border border-gray-50 animate-bounce-slow">
               <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <div className="w-7 h-7 bg-primary rounded-full shadow-[0_0_15px_rgba(255,122,0,0.5)]"></div>
               </div>
               <div>
                 <p className="text-[11px] uppercase font-black text-gray-400 tracking-[0.2em] leading-none mb-1.5">Elite Fleet</p>
                 <p className="text-2xl font-black text-gray-900 tracking-tight">Ertiga Premium</p>
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Booking Bar - Fixed Clipping by positioning and z-index */}
      <div className="absolute left-0 right-0 bottom-[-100px] z-30 px-4 pointer-events-none">
        <div className="pointer-events-auto">
          <BookingBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
