import React, { useEffect } from 'react';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Methodology from './components/Methodology';
import Deliveries from './components/Deliveries';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden">
      <main>
        <Hero />
        <SocialProof />
        <Methodology />
        <Deliveries />
        <HowItWorks />
        <About />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
