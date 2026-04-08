import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Heart, Target } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background Organic Mesh/Glow */}
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        width: '1000px',
        height: '1000px',
        background: 'radial-gradient(circle, rgba(11, 93, 59, 0.05) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.25fr', 
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Left Column: Authoritative Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.1', marginBottom: '40px', fontWeight: '900' }}>
                Key Benefits: <br />
                The <span className="text-gradient"> "Why" </span>
            </h2>
            
            <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'white', marginBottom: '16px' }}>Business Impact That Actually Converts</h4>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '500px' }}>
                    Zavyo isn't just automation it's a revenue engine. By combining WhatsApp, AI, and smart workflows, businesses can respond instantly, nurture leads automatically, and convert conversations into customers without increasing team workload.
                </p>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Metrics Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '24px'
          }}>
            <MetricCard 
                value="60%" 
                title="Less Manual Follow-Ups" 
                desc="Automate replies, reminders, and lead nurturing—eliminating repetitive tasks and freeing your team." 
            />
            <MetricCard 
                value="3x" 
                title="Faster Lead Conversion" 
                desc="Instant responses and guided AI conversations ensure leads are engaged at the right moment." 
            />
            <MetricCard 
                value="2x" 
                title="Higher Customer Engagement" 
                desc="Interactive WhatsApp flows, quick replies, and personalized messaging keep users engaged." 
            />
            <motion.div 
              whileHover={{ y: -10 }}
              style={{ 
                padding: '40px 32px', 
                borderRadius: '32px', 
                background: 'linear-gradient(135deg, var(--brand-green) 0%, #062f1e 100%)',
                border: '1px solid var(--brand-green-light)',
                boxShadow: '0 30px 60px rgba(11, 93, 59, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
                <div style={{ 
                    width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(255,255,255,0.1)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' 
                }}>
                    <TrendingUp size={28} color="white" />
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'white', marginBottom: '12px' }}>Scalable Growth</h3>
                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.5' }}>
                    Handle thousands of conversations simultaneously with AI without hiring more team members or compromising response quality.
                </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .section-container > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          h2 { text-align: center !important; }
          .section-container > div > div:first-child p { margin: 0 auto !important; text-align: center !important; }
          h4 { text-align: center !important; }
        }
        @media (max-width: 768px) {
          section { padding: 40px 0 20px !important; }
          .section-container > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .glass-card { padding: 32px 24px !important; text-align: center !important; }
          .glass-card > div:first-child { font-size: 2.5rem !important; }
        }
      `}} />
    </section>
  );
};

const MetricCard = ({ value, title, desc }) => (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass-card" 
      style={{ 
        padding: '40px 32px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'start',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
        <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--brand-green-light)', marginBottom: '16px', lineHeight: '1' }}>{value}</div>
        <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'white', marginBottom: '12px' }}>{title}</h4>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>{desc}</p>
    </motion.div>
);

export default Benefits;
