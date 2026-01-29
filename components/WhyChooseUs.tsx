
import React from 'react';
import { WHY_CHOOSE_US } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1449960232330-79338242e128?q=80&w=1200&auto=format&fit=crop" 
                alt="Happy Travelers" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20">
                <p className="text-gray-900 font-bold text-xl mb-1">Trusted by 5000+ Customers</p>
                <p className="text-teal-600 font-medium text-sm">Providing exceptional travel experiences across Nashik.</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl"></div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-6">We Put Your Journey <br />First, Always.</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Saishree Tours & Travels is committed to understanding each customer's needs and offering the most suitable vehicle and service. With over 8 years of experience, we've mastered the art of professional travel.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {WHY_CHOOSE_US.map((item) => (
                <div key={item.id} className="flex flex-col space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="bg-gray-900 hover:bg-teal-500 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl hover:shadow-teal-500/30">
                Learn More About Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
