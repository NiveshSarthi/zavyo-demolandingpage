import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const testimonials = [
  { image: '/rahul kushwaha.png' },
  { image: '/rakesh kushwaha.png' }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" style={{ 
      padding: '40px 0', 
      background: '#FFFFFF', 
      color: '#000000',
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      {/* Subtle Pastel Glow (Top-Left) */}
      <div style={{ 
        position: 'absolute', 
        top: '-10%', 
        left: '-10%', 
        width: '40%', 
        height: '60%', 
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)', gap: '80px', alignItems: 'center' }} className="testimonials-split">
          
          {/* Left Column: Rich Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="testimonials-content"
          >
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.2rem)', lineHeight: '1.2', marginBottom: '24px', fontWeight: '700', color: '#111' }}>
                Client Success Stories
            </h2>
            
            <div style={{ marginBottom: '48px' }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#16a34a', marginBottom: '20px' }}>What They Say</h4>
                <p style={{ fontSize: '1.25rem', color: '#444', lineHeight: '1.6', marginBottom: '32px' }}>
                    Zavyo has helped real estate businesses automate lead handling, reduce response time, and increase site visit conversions all through smart WhatsApp automation.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }} className="win-list">
                    <WinItem text="85% Reduction in Response Time" />
                    <WinItem text="3x Higher Site-Visit Bookings" />
                    <WinItem text="24/7 Automated Lead Capturing" />
                </div>

                <p style={{ fontSize: '1.2rem', color: '#16a34a', fontWeight: '800', lineHeight: '1.4' }}>
                    Driving high-velocity growth for modern real estate brands.
                </p>
            </div>
          </motion.div>

          {/* Right Column: Seamless Image Carousel */}
          <div style={{ position: 'relative', width: '100%' }} className="testimonials-carousel">
            <div style={{ 
                position: 'relative', 
                height: '560px', 
                width: '100%',
                borderRadius: '32px',
                overflow: 'visible'
            }} className="carousel-inner">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, y: -10 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <img 
                            src={testimonials[index].image} 
                            alt={`Success Story ${index + 1}`} 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'contain', 
                                display: 'block',
                                filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.15))' 
                            }} 
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Pagination Dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
                    {testimonials.map((_, i) => (
                        <motion.div 
                            key={i}
                            animate={{ width: index === i ? 24 : 8, backgroundColor: index === i ? '#16a34a' : 'rgba(0,0,0,0.1)' }}
                            style={{ height: '8px', borderRadius: '4px', cursor: 'pointer' }}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .testimonials-split {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .testimonials-content { text-align: center !important; }
          .win-list { align-items: center !important; }
          .carousel-inner { height: 400px !important; }
        }
        @media (max-width: 600px) {
          section { padding: 40px 0 !important; }
          .carousel-inner { height: 320px !important; }
          h2 { font-size: 1.8rem !important; }
          p { font-size: 1.1rem !important; }
        }
      `}} />
    </section>
  );
};

const WinItem = ({ text }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <CheckCircle2 size={20} color="#16a34a" />
        <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#333' }}>{text}</span>
    </div>
);

export default Testimonials;
