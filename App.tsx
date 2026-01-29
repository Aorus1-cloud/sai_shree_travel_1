
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingBar from './components/BookingBar';
import Services from './components/Services';
import Fleet from './components/Fleet';
import WhyChooseUs from './components/WhyChooseUs';
import Destinations from './components/Destinations';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';
import OtherTours from './pages/OtherTours';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
};

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <BookingBar />
      <Services />
      <Fleet />
      <WhyChooseUs />
      <Destinations />
      <Reviews />
      <CTA />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tours" element={<OtherTours />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
