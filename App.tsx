
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      {/* 
        Positioning BookingBar relatively with a negative margin 
        ensures it overlaps the Hero while remaining in the document flow 
        to prevent vertical clipping.
      */}
      <div className="relative z-20 -mt-24 lg:-mt-32">
        <BookingBar />
      </div>
      <div className="mt-20 lg:mt-32">
        <Services />
        <Fleet />
        <WhyChooseUs />
        <Destinations />
        <Reviews />
        <CTA />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
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
