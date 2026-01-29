
import React from 'react';
import { Compass, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-teal-500 rounded-full text-white">
                <Compass className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">Saishree</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium leading-none text-teal-400">Tours & Travels</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing safe, comfortable, and punctual travel services from Nashik across Maharashtra for over 8 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-500 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-500 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-500 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Our Fleet</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Service Routes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Booking Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Our Destinations</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Shirdi Temple Tour</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Trimbakeshwar Darshan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Mumbai Gateway Trip</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Pune IT Hub Drop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Mahabaleshwar Getaway</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-teal-500 shrink-0" />
                <span className="text-gray-400 text-sm">520, Jadhav Sankul, Ambad Link Road, Satpur, Nashik – 422010</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-teal-500 shrink-0" />
                <span className="text-gray-400 text-sm">+91 73859 57171</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-teal-500 shrink-0" />
                <span className="text-gray-400 text-sm">shubhampagar111@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs">
            © 2024 Saishree Tours & Travels. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
