import React, { useEffect } from 'react';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import ProductShowcase from './components/ProductShowcase';
import Benefits from './components/Benefits';
import Integrations from './components/Integrations';
import Trust from './components/Trust';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-reveal', 'true');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section, h1, h2, .glass-card').forEach(el => {
      el.setAttribute('data-reveal', 'false');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
      <Hero />
      <ClientLogos />
      <ProductShowcase />
      <Benefits />
      <Integrations />
      <Trust />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}

export default App;
