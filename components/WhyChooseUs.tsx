
import React from 'react';
import { WHY_CHOOSE_US } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200" 
                alt="Professional Chauffeur Service" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl border border-gray-100">
                <p className="text-gray-900 font-extrabold text-2xl mb-1">5000+ Happy Trips</p>
                <p className="text-teal-600 font-bold text-sm tracking-wide">Serving Maharashtra since 2016.</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-teal-500/10 rounded-full blur-2xl"></div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-teal-500 font-bold uppercase tracking-[0.2em] text-xs mb-6">Experience Excellence</h2>
              <h3 className="text-5xl md:text-6xl font-serif text-gray-900 font-bold mb-8 leading-tight">Your Journey, <br />Our Responsibility.</h3>
              <p className="text-gray-500 text-xl leading-relaxed">
                Saishree Tours & Travels is committed to understanding each customer's needs and offering the most suitable vehicle and service. With over 8 years of experience, we've mastered professional travel.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {WHY_CHOOSE_US.map((item) => (
                <div key={item.id} className="flex flex-col space-y-4 p-6 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <button className="bg-gray-900 hover:bg-teal-500 text-white px-12 py-5 rounded-2xl text-lg font-bold transition-all shadow-2xl hover:shadow-teal-500/40">
                Explore More
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
