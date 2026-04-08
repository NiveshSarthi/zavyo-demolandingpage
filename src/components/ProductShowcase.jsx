import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, MessageCircle, BarChart3, Settings2, Zap } from 'lucide-react';

const ProductShowcase = () => {
  return (
    <section id="features" style={{ padding: '40px 0', position: 'relative' }}>
      <div className="section-container">
        <div style={{ textAlign: 'left', marginBottom: '60px' }} className="showcase-header">
          <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.2em', color: 'var(--brand-green-light)', marginBottom: '12px' }}>Enterprise-Grade Protection</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', marginBottom: '32px' }}>Security & <span className="text-gradient">Reliability</span></h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 1.6fr', 
          gap: '80px',
          alignItems: 'start'
        }} className="showcase-grid">
          {/* Left: Security Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }} className="showcase-content">
            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', fontWeight: '800' }}>Built for Business-Grade Trust</h3>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                Zavyo is built on secure, scalable infrastructure with enterprise-grade encryption and official WhatsApp API compliance. Your customer data, conversations, and business workflows remain protected, reliable, and always accessible.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', fontWeight: '800' }}>End-to-End Data Protection</h3>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                All conversations and user data are encrypted and securely processed ensuring complete privacy and compliance with modern data standards.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '24px' }}>
              <SecurityStats value="99.9%" label="Platform Uptime" />
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
              <SecurityStats value="10K+" label="Daily Secured" />
            </div>
          </div>

          {/* Right: Security Asset (No BG version) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ 
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="showcase-image-container"
          >
            <img 
              src="/Zavyo-Feature-Brochure (3).png" 
              alt="Zavyo Security Features" 
              style={{ 
                height: 'auto', 
                maxHeight: '100%',
                width: '100%',
                objectFit: 'contain', 
                display: 'block' 
              }} 
            />
          </motion.div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .showcase-header { text-align: center !important; }
          .showcase-content { text-align: center !important; order: 2; }
          .showcase-image-container { order: 1; }
          .showcase-content > div:last-child { justify-content: center !important; }
        }
        @media (max-width: 600px) {
          section { padding: 40px 0 20px !important; }
          h3 { font-size: 1.5rem !important; }
        }
      `}} />
    </section>
  );
};

const SecurityStats = ({ value, label }) => (
  <div>
    <div style={{ fontSize: '1.8rem', fontWeight: '900', color: 'white' }}>{value}</div>
    <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--brand-green-light)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="glass-card" 
    style={{ padding: '32px', display: 'flex', gap: '24px', alignItems: 'center' }}
  >
    <div style={{ 
      minWidth: '56px', 
      height: '56px', 
      borderRadius: '16px', 
      background: 'rgba(11, 93, 59, 0.1)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      border: '1px solid rgba(11, 93, 59, 0.2)'
    }}>
      <Icon color="var(--brand-green-light)" />
    </div>
    <div>
      <h4 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{title}</h4>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{desc}</p>
    </div>
  </motion.div>
);

export default ProductShowcase;
