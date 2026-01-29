
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Fleet', path: '/#fleet' },
    { name: 'About', path: '/#about' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo & Name */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`p-2 rounded-xl transition-colors ${scrolled ? 'bg-teal-500 text-white' : 'bg-white/20 text-white backdrop-blur-md border border-white/20'}`}>
              <Compass className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>Saishree</span>
              <span className={`text-[9px] uppercase tracking-[0.3em] font-bold leading-none ${scrolled ? 'text-teal-600' : 'text-teal-400'}`}>Travels</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-teal-500 ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-7 py-3 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-teal-500/30">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenu(!mobileMenu)} className={`md:hidden p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 p-6 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} onClick={() => setMobileMenu(false)} className="block text-lg font-bold text-gray-900">
              {link.name}
            </a>
          ))}
          <button className="w-full bg-teal-500 text-white py-4 rounded-xl font-bold">Book Now</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
