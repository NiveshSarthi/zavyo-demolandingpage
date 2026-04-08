import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Package, Users, MessageSquareText, ExternalLink, BadgeCheck, Zap, Star } from 'lucide-react';

const Trust = () => {
  return (
    <section id="shopify" style={{ padding: '20px 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.2em', color: 'var(--brand-green-light)', marginBottom: '16px' }}>Direct Native Integration</div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '16px' }}>Zavyo + <span className="text-gradient">Shopify</span></h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>Combine the world's #1 e-commerce platform with the #1 WhatsApp automation engine.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '64px', alignItems: 'center' }} className="shopify-split">
          {/* Left: Shopify Feature Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="feature-grid">
            {[
              { 
                title: 'Abandoned Cart', 
                desc: 'Recover lost sales with automated WhatsApp prompts.', 
                icon: ShoppingCart 
              },
              { 
                title: 'Order Tracking', 
                desc: 'Instant shipping updates and real-time delivery alerts.', 
                icon: Package 
              },
              { 
                title: 'Segmentation', 
                desc: 'Direct sync of customer tags and purchase history.', 
                icon: Users 
              },
              { 
                title: 'Live Order Support', 
                desc: 'Manage Shopify orders directly from the chat window.', 
                icon: MessageSquareText 
              },
              { 
                title: 'Discount Coupons', 
                desc: 'Push personalized Shopify discounts directly to WhatsApp.', 
                icon: Zap 
              },
              { 
                title: 'Review Requests', 
                desc: 'Automate post-purchase review collection via chat.', 
                icon: Star 
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5, borderColor: 'var(--brand-green-light)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card" 
                style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', textAlign: 'center' }}
              >
                <div style={{ 
                  width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(11, 93, 59, 0.1)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(11, 93, 59, 0.2)' 
                }}>
                  <item.icon size={20} color="var(--brand-green-light)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '8px' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Authority Shopify Hub Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="authority-card"
            style={{ 
              padding: '48px', 
              background: 'linear-gradient(135deg, #021a0f 0%, var(--brand-green) 100%)', 
              borderRadius: '32px', 
              position: 'relative', 
              overflow: 'hidden',
              boxShadow: '0 40px 100px -20px rgba(11, 93, 59, 0.5)',
              border: '1px solid var(--brand-green-light)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div 
              className="verified-badge"
              style={{ 
                position: 'absolute', top: '24px', right: '24px', 
                background: 'rgba(0,0,0,0.5)', padding: '8px 16px', borderRadius: '100px',
                fontSize: '0.75rem', fontWeight: '800', color: 'white', display: 'flex', alignItems: 'center', gap: '8px',
                border: '1px solid rgba(255,255,255,0.1)', zIndex: 5
            }}>
                <BadgeCheck size={14} color="#95BF47" /> VERIFIED INTEGRATION
            </div>

            <div style={{ zIndex: 1 }}>
              <div style={{ 
                background: '#000', 
                padding: '24px 32px', 
                borderRadius: '20px', 
                width: 'fit-content', 
                marginBottom: '40px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
              }} className="shopify-logo-v">
                  <img src="/integrations/u3_1.png" alt="Shopify Logo" style={{ height: '40px', display: 'block' }} />
              </div>

              <h3 style={{ fontSize: '2.5rem', marginBottom: '16px', lineHeight: '1.2', fontWeight: '900' }} className="authority-title">
                  Recover Lost Revenue Instantly
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '40px', lineHeight: '1.6' }} className="authority-desc">
                  Store owners using Zavyo's native Shopify app see an average of 22% increase in recovered carts within the first 30 days.
              </p>

              <div style={{ display: 'flex', gap: '48px', paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }} className="authority-stats">
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'white' }}>+22%</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase' }}>Cart Recovery</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'white' }}>5 min</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase' }}>Sync Time</div>
                </div>
              </div>
            </div>

            <button className="btn-secondary" style={{ marginTop: '48px', width: '100%', background: 'white', color: 'var(--brand-green)', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '18px' }}>
                Configure Shopify in App <ExternalLink size={18} />
            </button>
          </motion.div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .shopify-split {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .authority-card { padding: 40px 24px !important; text-align: center !important; }
          .shopify-logo-v { margin: 20px auto 24px !important; }
          .authority-stats { justify-content: space-around !important; gap: 20px !important; paddingTop: 20px !important; }
          .authority-title { font-size: 1.8rem !important; margin-bottom: 12px !important; }
          .authority-desc { font-size: 1rem !important; margin-bottom: 24px !important; }
          .verified-badge { 
            position: relative !important; 
            top: 0 !important; 
            right: 0 !important; 
            margin: 0 auto 20px !important;
            width: fit-content !important;
          }
        }
        @media (max-width: 600px) {
          .feature-grid {
            grid-template-columns: 1fr !important;
          }
          .authority-stats { flex-direction: column !important; gap: 20px !important; }
          .authority-stats > div { border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 16px; }
          .authority-stats > div:last-child { border-bottom: none; }
          section { padding: 40px 0 20px !important; }
          .authority-card button { margin-top: 24px !important; }
        }
      `}} />
    </section>
  );
};

export default Trust;
