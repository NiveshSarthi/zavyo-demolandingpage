import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { Users2 } from 'lucide-react';

const TrustCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, 500, {
      duration: 3,
      onUpdate: (value) => setCount(Math.floor(value)),
      ease: "easeOut"
    });
    return () => controls.stop();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '20px',
        width: '100%',
        maxWidth: '450px'
      }}
    >
      <div style={{ position: 'relative' }}>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ 
            position: 'absolute', inset: -15, background: 'radial-gradient(circle, var(--brand-green-light) 0%, transparent 70%)',
            zIndex: 0, filter: 'blur(10px)'
          }}
        />
        <div style={{ 
          fontSize: '3.5rem', 
          fontWeight: '900', 
          color: 'var(--brand-green-light)',
          position: 'relative',
          zIndex: 1,
          fontFamily: 'Outfit, sans-serif',
          lineHeight: '1',
          letterSpacing: '-0.02em'
        }}>
          {count}+
        </div>
      </div>

      <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '20px' }}>
        <div style={{ 
          fontSize: '1rem', 
          fontWeight: '800', 
          color: 'white', 
          lineHeight: '1.2',
          marginBottom: '4px'
        }}>
          Automated <br /> Businesses Type
        </div>
        <div style={{ 
          fontSize: '0.85rem', 
          color: 'rgba(255,255,255,0.5)', 
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Users2 size={14} className="text-brand-green-light" /> Real-time Social Proof
        </div>
      </div>
    </motion.div>
  );
};

export default TrustCounter;
