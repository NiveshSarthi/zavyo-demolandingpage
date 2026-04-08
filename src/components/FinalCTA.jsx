import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section style={{ padding: '60px 0 100px' }}>
      <div className="section-container">
        <motion.div 
          whileInView={{ scale: [0.98, 1], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass-effect"
          style={{ 
            borderRadius: '24px', 
            padding: '80px 48px', 
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* mesh-like accent */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(11, 93, 59, 0.4) 0%, transparent 70%)', opacity: 0.5, zIndex: 0 }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              padding: '10px 20px', 
              background: 'rgba(255, 255, 255, 0.05)', 
              borderRadius: '10px', 
              marginBottom: '24px', 
              fontSize: '0.85rem', 
              fontWeight: '800',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              <Sparkles size={16} color="var(--brand-green-light)" /> Ready to Automate?
            </div>
            
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '32px' }}>
              Scale Your Business <br /> With WhatsApp + AI
            </h2>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary" 
              style={{ 
                padding: '16px 48px', 
                fontSize: '1.15rem'
              }}
            >
              Start 7-Day Free Trial <ArrowRight size={22} />
            </motion.button>
            
            <div style={{ 
              marginTop: '48px', 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '32px', 
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              fontWeight: '600'
            }} className="checkmark-list">
              <span>✓ Official API</span>
              <span>✓ 24/7 Setup</span>
              <span>✓ Enterprise Security</span>
            </div>
          </div>
        </motion.div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .glass-effect { padding: 60px 40px !important; }
        }
        @media (max-width: 768px) {
          h2 { font-size: 2.2rem !important; margin-bottom: 24px !important; }
          .glass-effect { padding: 48px 20px !important; }
          .checkmark-list {
            flex-direction: column !important;
            gap: 16px !important;
            margin-top: 32px !important;
          }
          .btn-primary { width: 100% !important; padding: 18px !important; }
        }
      `}} />
    </section>
  );
};

export default FinalCTA;
