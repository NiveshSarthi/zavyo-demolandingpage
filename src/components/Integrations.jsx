import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Zap, MessageSquare } from 'lucide-react';

const partners = [
  { name: 'Google Ads', logo: '/integrations/u1_1.png', angle: 0 },
  { name: 'Meta', logo: '/integrations/u1_2.png', angle: 45 },
  { name: 'Google Sheets', logo: '/integrations/u1_3.png', angle: 90 },
  { name: 'Zapier', logo: '/integrations/u1_4.png', angle: 135 },
  { name: 'Shopify', logo: '/integrations/u3_1.png', angle: 180 },
  { name: 'WooCommerce', logo: '/integrations/u3_2.png', angle: 225 },
  { name: 'HubSpot', logo: '/integrations/u3_3.png', angle: 270 },
  { name: 'Zoho', logo: '/integrations/u3_4.png', angle: 315 },
];

const Integrations = () => {
  return (
    <section id="integrations" style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.2em', color: 'var(--brand-green-light)', marginBottom: '16px' }}>The Zavyo Ecosystem</div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '16px' }}>Seamless <span className="text-gradient">Integrations</span></h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto' }}>Connect Zavyo to the tools you already use every day with zero friction.</p>
        </div>

        {/* Interactive Ecosystem Visual */}
        <div style={{ 
          position: 'relative', 
          height: '600px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }} className="ecosystem-container">
          {/* Central Hub */}
          <motion.div 
            animate={{ 
                boxShadow: [
                    '0 0 40px rgba(11, 93, 59, 0.4)',
                    '0 0 80px rgba(11, 93, 59, 0.6)',
                    '0 0 40px rgba(11, 93, 59, 0.4)'
                ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="hub-node"
            style={{ 
              width: '140px', 
              height: '140px', 
              borderRadius: '100%', 
              background: 'linear-gradient(135deg, var(--brand-green) 0%, #062f1e 100%)',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid var(--brand-green-light)',
              position: 'relative'
            }}
          >
            <div style={{ textAlign: 'center' }}>
                <Zap size={48} color="white" />
                <div style={{ fontSize: '0.75rem', fontWeight: '900', color: 'var(--brand-green-light)', letterSpacing: '0.1em', marginTop: '4px' }}>ZAVYO CORE</div>
            </div>
          </motion.div>

          {/* Connection Lines & Orbiting Nodes */}
          <div className="partners-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {partners.map((partner, i) => {
            const radius = 320;
            const x = Math.cos((partner.angle * Math.PI) / 180) * radius;
            const y = Math.sin((partner.angle * Math.PI) / 180) * radius;

            return (
              <React.Fragment key={i}>
                {/* SVG Pulse Line */}
                <svg style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'visible', zIndex: 0 }}>
                    <motion.line 
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.2 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                        x1="50%" y1="50%" 
                        x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`} 
                        style={{ stroke: 'var(--brand-green-light)', strokeWidth: '1' }}
                    />
                    <motion.circle 
                        r="3" 
                        fill="var(--brand-green-light)"
                        animate={{ offsetDistance: ['0%', '100%'], opacity: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: 'linear' }}
                        style={{ 
                            offsetPath: `path('M 400 300 L ${400 + x} ${300 + y}')`,
                            filter: 'blur(2px)'
                        }}
                    />
                </svg>

                {/* Integration Node */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', damping: 15, delay: i * 0.05 }}
                  className="partner-node"
                  style={{ 
                    position: 'absolute', 
                    left: `calc(50% + ${x}px)`, 
                    top: `calc(50% + ${y}px)`, 
                    transform: 'translate(-50%, -50%)',
                    width: '110px',
                    height: '110px',
                    margin: '-55px 0 0 -55px',
                    pointerEvents: 'auto'
                  }}
                >
                  <div className="glass-card" style={{ 
                      width: '100%', height: '100%', borderRadius: '24px', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      padding: '16px', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden'
                  }}>
                    <img src={partner.logo} alt={partner.name} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                  </div>
                  <div style={{ 
                      position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                      marginTop: '12px', whiteSpace: 'nowrap', fontSize: '0.85rem', fontWeight: '800',
                      color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em'
                  }}>
                    {partner.name}
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .ecosystem-container {
            transform: scale(0.8);
            transform-origin: center center;
            margin: -40px auto !important;
          }
        }
        @media (max-width: 768px) {
          .ecosystem-container {
            transform: scale(0.6);
            margin: -100px auto !important;
          }
        }
        @media (max-width: 480px) {
          .ecosystem-container {
            transform: scale(0.45);
            margin: -160px auto !important;
          }
        }
      `}} />
    </section>
  );
};

export default Integrations;
