import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Mail, Phone, User, Building, Globe, ArrowRight, Sparkles, 
  Volume2, VolumeX, Camera, Briefcase, Send, Users2, ShieldCheck, 
  Zap, MessageSquare, BadgeCheck, BarChart3, Workflow, Layers, Rocket, Quote
} from 'lucide-react';
import TrustCounter from './TrustCounter';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    industry: 'Real Estate'
  });
  
  const [isMuted, setIsMuted] = useState(true);
  const [isHoveringVideo, setIsHoveringVideo] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Demo Request Received! We will contact you on WhatsApp shortly.');
  };

  return (
    <section style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '80px 0 40px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="section-container">
        {/* Main Hero Split */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 1fr', 
          gridTemplateAreas: `
            "intro form"
            "cta form"
          `,
          gap: '80px',
          alignItems: 'start',
          marginBottom: '80px'
        }} className="hero-split">
          {/* Left Column Part 1: Intro */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="hero-left"
            style={{ gridArea: 'intro' }}
          >
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '8px 16px', 
              background: 'rgba(11, 93, 11, 0.08)', 
              borderRadius: '10px', 
              border: '1px solid rgba(11, 93, 11, 0.15)',
              marginBottom: '24px',
              fontSize: '0.85rem',
              fontWeight: '700',
              color: 'var(--brand-green-light)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }} className="badge-official">
              <Sparkles size={16} /> Official WhatsApp API Partner
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px', lineHeight: '1.1' }} className="hero-title">
              Automate <span className="text-gradient">WhatsApp</span> <br /> Scale Your Business
            </h1>
            
            <p style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '32px', lineHeight: '1.6' }} className="hero-desc">
              Turn conversations into customers effortlessly with Zavyo. The #1 AI-powered WhatsApp automation built for high-growth Indian brands.
            </p>
          </motion.div>

          {/* Right Column: RICH Demo Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hero-right"
            style={{ gridArea: 'form' }}
          >
            <div className="glass-effect" style={{ 
              padding: '40px', 
              borderRadius: '24px', 
              position: 'relative',
              boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(22, 163, 74, 0.05)',
              border: '1px solid rgba(22, 163, 74, 0.15)'
            }}>
                {/* Verified Badge */}
              <div style={{ 
                  position: 'absolute', top: '-16px', right: '24px', background: 'var(--brand-green)', color: 'white',
                  padding: '6px 16px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '800', display: 'flex', 
                  alignItems: 'center', gap: '6px', boxShadow: '0 10px 20px rgba(11, 93, 59, 0.4)', zIndex: 5
              }}>
                <ShieldCheck size={14} /> SECURE BOOKING
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    Start Free Demo <BadgeCheck className="text-brand-green-light" size={24} />
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Instant activation. No credit card required.</p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <FormInput icon={User} placeholder="Full Name" />
                <FormInput icon={Building} placeholder="Business Name" />
                <FormInput icon={Phone} placeholder="WhatsApp Number" />
                <FormInput icon={Mail} placeholder="Official Email" type="email" />
                
                <div style={{ position: 'relative' }}>
                  <Globe size={18} style={{ position: 'absolute', left: '20px', top: '16px', color: 'var(--brand-green-light)' }} />
                  <select 
                    style={{ 
                      width: '100%', padding: '16px 20px 16px 52px', background: 'rgba(255, 255, 255, 0.04)', 
                      border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: 'white', 
                      fontSize: '0.95rem', appearance: 'none', cursor: 'pointer', outline: 'none'
                    }}
                  >
                    <option value="Real Estate">Real Estate Industry</option>
                    <option value="Gym">Gym & Fitness</option>
                    <option value="Clinic">Healthcare & Clinics</option>
                    <option value="Ecommerce">Ecommerce & Retail</option>
                    <option value="Other">Other Business</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary" style={{ 
                  height: '64px', width: '100%', marginTop: '12px', fontSize: '1.2rem',
                  background: 'linear-gradient(135deg, var(--brand-green) 0%, var(--brand-green-light) 100%)'
                }}>
                  Book Free Demo <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Left Column Part 2: CTA & Trust (Moved for mobile reordering) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-cta-mobile-reorder"
            style={{ gridArea: 'cta' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '32px' }} className="hero-cta-group">
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }} className="cta-buttons">
                <button className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem', position: 'relative', overflow: 'hidden', minWidth: '240px' }}>
                  Start 7-Day Free Trial
                  <motion.div 
                      animate={{ x: [-100, 200] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)', width: '60px' }}
                  />
                </button>
                <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'rgba(255,255,255,0.6)', padding: '12px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  Plans from <span style={{ color: 'var(--brand-green-light)' }}>₹1,999/mo</span>
                </div>
              </div>

              {/* Trust Counter - Social Proof Hub */}
              <div style={{ width: '100%' }}>
                  <TrustCounter />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Secondary Section: Video & Vertical Value Stack */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.2fr', 
          gap: '80px',
          paddingTop: '80px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          alignItems: 'stretch'
        }} className="video-value-split">
          {/* Portrait Reel Video Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHoveringVideo(true)}
            onMouseLeave={() => setIsHoveringVideo(false)}
            style={{ 
              borderRadius: '24px', overflow: 'hidden', boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.8)',
              position: 'relative', background: 'rgba(11, 93, 11, 0.05)', padding: '8px', cursor: 'pointer',
              height: '100%', minHeight: '600px'
            }}
            className="video-container"
            onClick={toggleMute}
          >
            <video 
              ref={videoRef} autoPlay loop muted playsInline 
              style={{ width: '100%', height: '100%', display: 'block', borderRadius: '20px', objectFit: 'cover' }}
            >
              <source src="/Color Matte.mp4" type="video/mp4" />
            </video>
            <AnimatePresence>
              {isHoveringVideo && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                  style={{ 
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10,
                    background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', padding: '16px', borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  {isMuted ? <VolumeX size={24} color="white" /> : <Volume2 size={24} color="white" />}
                </motion.div>
              )}
            </AnimatePresence>
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', boxShadow: 'inset 0 0 100px rgba(0,0,0,0.6)' }} />
          </motion.div>

          {/* VERTICAL CONTENT STACK - Saturating full vertical space */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            height: '100%',
            padding: '20px 0'
          }} className="v-value-stack">
            {/* Top Layer: Header & Live Metrics */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(11, 93, 11, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Users2 size={24} color="var(--brand-green-light)" />
                </div>
                <div>
                    <h4 style={{ fontSize: '1.45rem', fontWeight: '800', lineHeight: '1.2' }}>Join 500+ Indian Brands</h4>
                    <p style={{ color: 'var(--brand-green-light)', fontSize: '0.9rem', fontWeight: '700' }}>Dominating WhatsApp Marketing in 2024</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px' }} className="metric-grid">
                <StatCard value="98%" label="Open Rate" />
                <StatCard value="1M+" label="Messages/mo" />
                <StatCard value="5x" label="Faster ROI" />
              </div>
            </div>

            {/* Middle Layer: THE ZAVYO FLOW (3-Step Guide) */}
            <div style={{ padding: '32px', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '40px' }} className="workflow-card">
                <h5 style={{ fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>How it works</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <FlowStep step="01" icon={Globe} title="Connect Official API" desc="Sync your Meta-verified business number in 5 minutes." />
                    <FlowStep step="02" icon={Layers} title="Automate Chat Flows" desc="Design custom AI chat paths for sales and support." />
                    <FlowStep step="03" icon={Rocket} title="Scale Instantly" desc="Handle 1,000s of conversations on autopilot 24/7." />
                </div>
            </div>

            {/* Bottom Layer: Expanded Features & Socials */}
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginBottom: '48px' }} className="feature-grid">
                <RichFeature icon={Zap} title="Intelligent Flows" desc="Handle 80% of support queries automatically." />
                <RichFeature icon={MessageSquare} title="Drip Campaigns" desc="Precision lead retargeting via WhatsApp." />
                <RichFeature icon={Workflow} title="API Integration" desc="Official Meta partnership for 100% security." />
                <RichFeature icon={Quote} title="Success Snippet" desc="'Zavyo tripled our sales leads in 3 months.' - UrbanFit" />
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)' }} className="social-row">
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Follow Zavyo</span>
                <div style={{ display: 'flex', gap: '16px' }}>
                    {[
                        { icon: Camera, color: '#E4405F' },
                        { icon: Briefcase, color: '#0077B5' },
                        { icon: Send, color: '#1DA1F2' }
                    ].map((brand, i) => (
                        <motion.a 
                            key={i} href="#" whileHover={{ y: -6, backgroundColor: brand.color, borderColor: 'white' }}
                            style={{ 
                                width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.08)',
                                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)', color: 'white'
                            }}
                        >
                            <brand.icon size={18} />
                        </motion.a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .hero-split { 
            grid-template-columns: 1fr !important; 
            grid-template-areas: "intro" "form" "cta" !important; 
            gap: 60px !important; 
            margin-bottom: 60px !important; 
          }
          .hero-left { text-align: center !important; }
          .hero-title, .hero-desc { text-align: center !important; margin-left: auto !important; margin-right: auto !important; }
          .hero-cta-group { align-items: center !important; }
          .cta-buttons { justify-content: center !important; width: 100% !important; }
          .hero-right { margin-bottom: 20px !important; }
          .video-value-split { grid-template-columns: 1fr !important; gap: 48px !important; }
          .video-container { min-height: 450px !important; order: 1; }
          .v-value-stack { order: 2; }
          
          .btn-primary { 
            display: flex !important; 
            justify-content: center !important; 
            align-items: center !important; 
            gap: 12px !important;
            text-align: center !important;
            width: 100% !important;
          }
        }
        @media (max-width: 768px) {
          section { padding: 40px 0 20px !important; }
          .hero-title { font-size: 2.5rem !important; }
          .glass-effect { padding: 24px !important; }
          .metric-grid { grid-template-columns: 1fr !important; }
          .feature-grid { grid-template-columns: 1fr !important; }
          .workflow-card { padding: 20px !important; }
          .hero-split { margin-bottom: 40px !important; }
          .badge-official { font-size: 0.75rem !important; }
        }
      `}} />
    </section>
  );
};

const StatCard = ({ value, label }) => (
    <div style={{ 
        padding: '16px 12px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', 
        border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' 
    }}>
        <div style={{ fontSize: '1.4rem', fontWeight: '900', color: 'white' }}>{value}</div>
        <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
    </div>
);

const FlowStep = ({ step, icon: Icon, title, desc }) => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div style={{ fontSize: '0.9rem', fontWeight: '900', color: 'var(--brand-green-light)', opacity: 0.5 }}>{step}</div>
        <div style={{ minWidth: '40px', height: '40px', borderRadius: '10px', background: 'rgba(11, 93, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon size={20} color="var(--brand-green-light)" />
        </div>
        <div>
            <h6 style={{ fontSize: '1rem', fontWeight: '800', color: 'white' }}>{title}</h6>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{desc}</p>
        </div>
    </div>
);

const RichFeature = ({ icon: Icon, title, desc }) => (
    <div style={{ display: 'flex', gap: '14px', alignItems: 'start' }}>
        <div style={{ minWidth: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.08)' }}>
            <Icon size={18} color="var(--brand-green-light)" />
        </div>
        <div>
            <h5 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'white', marginBottom: '4px' }}>{title}</h5>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.4' }}>{desc}</p>
        </div>
    </div>
);

const FormInput = ({ icon: Icon, ...props }) => (
  <div style={{ position: 'relative' }}>
    <Icon size={18} style={{ position: 'absolute', left: '20px', top: '16px', color: 'var(--brand-green-light)' }} />
    <input 
      {...props}
      style={{ 
        width: '100%', padding: '16px 20px 16px 52px', background: 'rgba(255, 255, 255, 0.04)', 
        border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: 'white', 
        fontSize: '0.95rem', outline: 'none', transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
      onFocus={(e) => { e.target.style.borderColor = 'var(--brand-green-light)'; e.target.style.background = 'rgba(255, 255, 255, 0.08)'; }}
      onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.target.style.background = 'rgba(255, 255, 255, 0.04)'; }}
    />
  </div>
);

export default Hero;
