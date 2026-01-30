
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook, Twitter, Linkedin, Menu, X, Compass } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', path: '/#about' },
    { name: 'CAR LIST', path: '/#fleet' },
    { name: 'OUR SERVICE', path: '/#services' },
    { name: 'SUPPORT', path: '/#footer' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar */}
      <div className={`hidden md:flex bg-white border-b border-gray-100 py-2 transition-all duration-300 ${scrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'h-10 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center text-[11px] font-bold text-gray-500 uppercase tracking-wider">
          <div className="flex items-center space-x-6">
            <a href="tel:+917385957171" className="flex items-center space-x-2 hover:text-primary transition-colors">
              <Phone className="w-3 h-3 text-primary" />
              <span>+91 73859 57171</span>
            </a>
            <a href="mailto:shubhampagar111@gmail.com" className="flex items-center space-x-2 hover:text-primary transition-colors">
              <Mail className="w-3 h-3 text-primary" />
              <span>support@saishree.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook className="w-3.5 h-3.5 cursor-pointer hover:text-primary transition-colors" />
            <Twitter className="w-3.5 h-3.5 cursor-pointer hover:text-primary transition-colors" />
            <Instagram className="w-3.5 h-3.5 cursor-pointer hover:text-primary transition-colors" />
            <Linkedin className="w-3.5 h-3.5 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-white py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <div className="absolute -inset-1 bg-primary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-2 py-2 bg-white rounded-lg flex items-center">
                  <span className="text-2xl font-black text-gray-900 tracking-tighter">
                    <span className="text-primary">S</span>ai<span className="text-primary">b</span>uz.com
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-[13px] font-extrabold text-gray-800 hover:text-primary transition-colors tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="text-[13px] font-bold text-primary hover:text-primary/80">Sign up</button>
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-xl text-[13px] font-extrabold shadow-xl shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
                Rent A Car
              </button>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden p-2 text-gray-900">
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="lg:hidden bg-white border-t border-gray-50 absolute top-full left-0 right-0 p-8 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <a key={link.name} href={link.path} onClick={() => setMobileMenu(false)} className="block text-xl font-black text-gray-900 hover:text-primary">
                {link.name}
              </a>
            ))}
            <div className="pt-6 space-y-4">
              <button className="w-full text-center font-bold text-gray-500">Sign up</button>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-black shadow-xl shadow-primary/30">
                Rent A Car
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
