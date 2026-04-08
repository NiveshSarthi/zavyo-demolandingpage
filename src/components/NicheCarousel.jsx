import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Dumbbell, Stethoscope, ShoppingBag, Utensils, Scissors, 
  GraduationCap, Wrench, Scale, Syringe, Car, Plane, Laptop, Briefcase, Zap
} from 'lucide-react';

const niches = [
  { name: 'Real Estate', icon: Building2, advantage: '3x Faster Lead Response' },
  { name: 'Gyms', icon: Dumbbell, advantage: '2x Higher Member Retention' },
  { name: 'Clinics', icon: Stethoscope, advantage: 'Automated Patient Booking' },
  { name: 'Ecommerce', icon: ShoppingBag, advantage: 'Abandoned Cart Recovery' },
  { name: 'Restaurants', icon: Utensils, advantage: 'Instant Table Reservations' },
  { name: 'Salons', icon: Scissors, advantage: '24/7 Appointment Booking' },
  { name: 'Education', icon: GraduationCap, advantage: 'Direct Student Registration' },
  { name: 'HVAC & Maintenance', icon: Wrench, advantage: 'Emergency Quote Response' },
  { name: 'Law Firms', icon: Scale, advantage: 'Secure Client Onboarding' },
  { name: 'Dental Clinics', icon: Syringe, advantage: 'Treatment Reminder Flows' },
  { name: 'Auto Dealers', icon: Car, advantage: 'Instant Test Drive Booking' },
  { name: 'Travel Agency', icon: Plane, advantage: 'Automated Itinerary Sent' },
  { name: 'SaaS Startups', icon: Laptop, advantage: 'Product Demo Automation' },
  { name: 'B2B Services', icon: Briefcase, advantage: 'Professional Lead Qualifiers' }
];

const NicheCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % niches.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const getVisibleNiches = () => {
    const res = [];
    for (let i = 0; i < 3; i++) {
        res.push({
            ...niches[(index + i) % niches.length],
            visibleIdx: i
        });
    }
    return res;
  };

  return (
    <div style={{ 
      height: '90px', 
      position: 'relative', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      perspective: '1000px',
      marginTop: '40px'
    }}>
      <AnimatePresence mode="popLayout">
        {getVisibleNiches().map((niche, i) => (
          <motion.div
            key={niche.name}
            onMouseEnter={() => {
                if (i === 0) {
                    setIsPaused(true);
                    setHoveredIdx(index);
                }
            }}
            onMouseLeave={() => {
                setIsPaused(false);
                setHoveredIdx(null);
            }}
            initial={{ opacity: 0, x: 100, z: -200, scale: 0.5 }}
            animate={{ 
              opacity: i === 0 ? 1 : i === 1 ? 0.6 : 0.2, 
              x: i * 200, // Active at 0, next at 200, etc.
              z: i === 0 ? 30 : -150 * i, 
              scale: i === 0 ? 1.05 : 0.7 / (i + 0.4),
              filter: `blur(${i * 1.5}px)`,
              boxShadow: i === 0 ? '0 0 25px rgba(11, 93, 11, 0.3)' : 'none'
            }}
            exit={{ opacity: 0, x: -100, z: -300, scale: 0.4 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            style={{ 
              position: 'absolute',
              padding: '12px 24px',
              background: i === 0 ? 'var(--brand-green)' : 'rgba(255, 255, 255, 0.03)',
              borderRadius: '100px',
              border: i === 0 ? '1.5px solid var(--brand-green-light)' : '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
              whiteSpace: 'nowrap',
              zIndex: 10 - i,
              cursor: i === 0 ? 'pointer' : 'default',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <niche.icon size={18} color={i === 0 ? 'white' : 'var(--brand-green-light)'} />
                <span style={{ fontSize: '1rem', fontWeight: '800', color: 'white', letterSpacing: '0.01em' }}>{niche.name}</span>
            </div>
            
            {/* Expanded Advantage Snippet on Hover */}
            {i === 0 && isPaused && (
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: '700', 
                        color: 'rgba(255,255,255,0.8)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginTop: '2px'
                    }}
                >
                    {niche.advantage}
                </motion.div>
            )}
            
            {/* Active Glow Accent */}
            {i === 0 && (
                <motion.div 
                    animate={{ x: [-100, 200] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    style={{ 
                        position: 'absolute', 
                        top: 0, 
                        width: '40px', 
                        height: '100%', 
                        background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)',
                        transform: 'skewX(-20deg)'
                    }} 
                />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NicheCarousel;
