import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const clientData = [
  { logo: '/clients/1.png', review: "Zavyo transformed our support volume. Instant ROI and absolute scale." },
  { logo: '/clients/2.png', review: "The best WhatsApp automation for retail. Our team loves the simplicity." },
  { logo: '/clients/3.png', review: "Seamless integration with our existing CRM. Setup was done in minutes." },
  { logo: '/clients/4.png', review: "Our conversion rates jumped by 40% in two months. Game changer for sales." },
  { logo: '/clients/5.png', review: "Automated leads mean we never miss a site visit. High-velocity growth." },
  { logo: '/clients/6.png', review: "Zavyo is the backbone of our digital marketing. Reliable and secure." },
  { logo: '/clients/7.png', review: "Highly recommended for enterprise-scale operations. Meta-verified partner." },
  { logo: '/clients/8.png', review: "Simple, powerful, and 100% compliant. Exactly what our brand needed." },
  { logo: '/clients/9.png', review: "Revolutionized our abandoned cart recovery. +22% recovered revenue." },
  { logo: '/clients/10.png', review: "Great support and even better features. Zavyo is built for performance." }
];

const ClientLogos = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section style={{ 
      padding: '30px 0', 
      background: '#FFFFFF', 
      borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      position: 'relative',
      zIndex: 20
    }}>
      <div className="section-container">
        {/* New Heading */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h3 style={{ 
                fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', 
                fontWeight: '700', 
                color: '#666', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em' 
            }}>
                Trusted by our loved clients
            </h3>
        </div>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '60px',
        }} className="client-grid">
          {clientData.map((client, index) => (
            <div 
                key={index} 
                style={{ position: 'relative' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img 
                  src={client.logo} 
                  alt={`Client Logo ${index + 1}`}
                  className="client-logo-img"
                  style={{ 
                    height: '110px',
                    width: 'auto', 
                    maxWidth: '240px',
                    objectFit: 'contain',
                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                />
              </motion.div>

              {/* ... Popup Logic remains same ... */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: -10, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    style={{ 
                      position: 'absolute', 
                      bottom: '100%', 
                      left: '50%', 
                      translateX: '-50%',
                      width: '240px',
                      padding: '20px',
                      background: '#111', 
                      borderRadius: '16px',
                      border: '1px solid #16a34a',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                      zIndex: 100,
                      pointerEvents: 'none',
                      marginBottom: '15px'
                    }}
                  >
                    <Quote size={16} color="#16a34a" style={{ marginBottom: '12px', opacity: 0.8 }} />
                    <p style={{ 
                        fontSize: '0.9rem', 
                        color: 'white', 
                        lineHeight: '1.5', 
                        fontWeight: '500',
                        margin: 0
                    }}>
                      "{client.review}"
                    </p>
                    <div style={{ 
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '0',
                        height: '0',
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid transparent',
                        borderTop: '10px solid #16a34a'
                    }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .client-grid { gap: 40px !important; }
          .client-logo-img { height: 70px !important; }
        }
        @media (max-width: 768px) {
          .client-grid { gap: 20px !important; }
          .client-logo-img { height: 45px !important; }
          section { padding: 20px 0 !important; }
        }
      `}} />
    </section>
  );
};

export default ClientLogos;
